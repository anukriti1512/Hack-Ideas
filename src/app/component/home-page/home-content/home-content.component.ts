import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ConnectableObservable } from 'rxjs';
import { HackathonService } from 'src/app/hackathon.service';

@Component({
  selector: 'app-home-content',
  templateUrl: './home-content.component.html',
  styleUrls: ['./home-content.component.css'],
})
export class HomeContentComponent implements OnInit {
  Data: any = [];
  todaysDate: any = '';
  liveHackathons: any = [];
  pastHackathons: any = [];
  dataActive: string = '';
  loggedInUser = '';
  votesCount: any = {};
  getUserVotes: any = [];

  constructor(private router: Router, private hackathon: HackathonService) {}
  ngOnInit(): void {
    this.loggedInUser = this.hackathon.getLoggedInUser(); //get current logged in user value
    this.votesCount = this.hackathon.getTotalVotesCount(); // get votes count for all the hackathons
    this.Data = this.hackathon.getHackathonData(); //get hackathon data
    // console.log(this.Data);
    this.todaysDate = new Date(); //get todays current date
    // this.getUserVotes = this.hackathon.getUserVotesData(this.loggedInUser);
    this.getUpvotes();
    this.Data.forEach((element: any) => {
      //set votes for each hackathon
      element['votes'] = this.votesCount[element.id];
      let endingDate = new Date(Date.parse(element.endsOn));
      //decide data based on live and past status
      if (endingDate.getTime() > this.todaysDate.getTime()) {
        element['status'] = 'live';
        this.liveHackathons.push(element);
      } else {
        element['status'] = 'past';
        this.pastHackathons.push(element);
      }
    });
    // console.log(this.Data);
    this.setHomePageContent();
  }

  //set upvotes for each hackathon based on user
  getUpvotes() {
    this.getUserVotes = this.hackathon.getUserVotesData(this.loggedInUser); //get votes done by the logged in user
    this.Data.forEach((element: any) => {
      if (this.getUserVotes && this.getUserVotes.includes(element.id)) {
        element['upvote'] = true;
      } else {
        element['upvote'] = false;
      }
    });
  }

  //Set live data by default - on page load
  setHomePageContent() {
    this.dataActive = 'Live';
    this.Data = this.liveHackathons;
    console.log('final live data', this.Data);
  }

  // load content based on status of hackathons = live/past
  loadContent(status: string) {
    if (status === 'live') {
      this.dataActive = 'Live';
      this.Data = this.liveHackathons;
    } else {
      this.dataActive = 'Past';
      this.Data = this.pastHackathons;
      console.log('final Past data', this.Data);
    }
  }

  createNewHackathon() {
    this.router.navigateByUrl('/home/create-hackathon');
  }

  //view details of the corresponding hackathon
  SeeDetails(id: any) {
    //filter out selected hackathon from the data array
    let selectedHackathon = this.Data.filter((element: any) => {
      if (element.id == id) {
        return true;
      } else {
        return false;
      }
    });
    //set selected hackathon value - that's being clicked
    this.hackathon.setSelectedHackathonDetails(selectedHackathon);
    //navigate to component for hackathon details
    this.router.navigate(['/home/hackathon-details', id]);
  }

  //sort hackathon based on votes or creation date
  sortHackathon(e: any) {
    //creation-date
    if (e.target.id === 'aesc-date') {
      this.Data.sort(function (a: any, b: any) {
        return (
          new Date(a.creationDate).getTime() -
          new Date(b.creationDate).getTime()
        );
      });
    }
    if (e.target.id === 'desc-date') {
      this.Data.sort(function (a: any, b: any) {
        return (
          new Date(b.creationDate).getTime() -
          new Date(a.creationDate).getTime()
        );
      });
    }
    //
    if (e.target.id === 'aesc-vote') {
      this.Data.sort(function (a: any, b: any) {
        return a.votes - b.votes;
      });
    }
    if (e.target.id === 'desc-vote') {
      this.Data.sort(function (a: any, b: any) {
        return b.votes - a.votes;
      });
    }
    console.log(this.Data);
  }

  //upvote an idea
  upvoteIdea(id: any) {
    let pastStatus = this.Data.filter((element: any) => {
      return element.id === id;
    })[0].upvote;
    console.log('past status', pastStatus);
    console.log(id);
    if (this.loggedInUser) {
      this.hackathon.UpdateuserVotes(this.loggedInUser, id);
      if (pastStatus === false) {
        this.Data.forEach((value: any) => {
          if (value.id === id) {
            value.upvote = true;
            value.votes++;
          }
        });
      } else {
        this.Data.forEach((value: any) => {
          if (value.id === id) {
            value.upvote = false;
            value.votes--;
          }
        });
      }
    }
    console.log(this.Data);
  }
}
