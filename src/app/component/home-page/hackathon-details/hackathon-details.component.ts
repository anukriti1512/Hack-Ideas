import { Component, OnInit } from '@angular/core';
import { HackathonService } from 'src/app/hackathon.service';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';

@Component({
  selector: 'app-hackathon-details',
  templateUrl: './hackathon-details.component.html',
  styleUrls: ['./hackathon-details.component.css'],
})
export class HackathonDetailsComponent implements OnInit {
  selectedHackathon: any = {};
  hackathonData: any = [];
  hackathonId: string = '';
  hackathonRules = [];

  constructor(
    private route: ActivatedRoute,
    private hackathon: HackathonService
  ) {}

  ngOnInit(): void {
    //get the id of the hackathon from the url
    this.route.queryParams.subscribe((params) => {
      this.hackathonId = this.route.snapshot.params['id'];
    });
    //get selected hackathon object
    this.selectedHackathon = this.hackathon.getSelectedHackathonDetails();
    console.log('selected hackathon', this.selectedHackathon);
    //if hackathon details is opened from the url direct
    if (!Object.keys(this.selectedHackathon).length) {
      this.hackathonData = this.hackathon.getHackathonData();
      console.log(this.hackathonId);
      //filter out selected hackathon from the data array
      this.selectedHackathon = this.hackathonData.filter((element: any) => {
        if (element.id == this.hackathonId) {
          return true;
        } else {
          return false;
        }
      });
      console.log('selected hackathon', this.selectedHackathon);
    }
    this.hackathonRules = this.selectedHackathon[0].Rules.split('.');
    this.hackathonRules.pop();
  }
}
