import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
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

  constructor(private router: Router, private hackathon: HackathonService) {}
  ngOnInit(): void {
    this.Data = this.hackathon.getHackathonData(); //get hackathon data
    console.log(this.Data);
    this.todaysDate = new Date(); //get todays current date

    //decide content based on date if its live or past
    this.Data.forEach((element: any) => {
      let endingDate = new Date(Date.parse(element.endsOn));
      if (endingDate.getTime() > this.todaysDate.getTime()) {
        // console.log('its live');
        element['status'] = 'live';
        this.liveHackathons.push(element);
      } else {
        // console.log('its over');
        element['status'] = 'past';
        this.pastHackathons.push(element);
      }
    });

    this.setHomePageContent();
  }

  //Set live data by default - on page load
  setHomePageContent() {
    this.dataActive = 'Live';
    this.Data = this.liveHackathons;
  }

  // load content based on status of hackathons = live/past
  loadContent(status: string) {
    if (status === 'live') {
      this.dataActive = 'Live';
      this.Data = this.liveHackathons;
    } else {
      this.dataActive = 'Past';
      this.Data = this.pastHackathons;
    }
  }

  cm(c: any) {
    console.log(c);
    console.log(c['target'].id);
  }
  p(e: any) {
    alert(e.target.parentNode.id);
  }

  createNewHackathon() {
    this.router.navigateByUrl('/home/create-hackathon');
  }

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

  sortc() {
    alert('sort pressed');
  }
}
