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
  constructor(private router: Router, private hackathon: HackathonService) {}
  ngOnInit(): void {
    this.Data = this.hackathon.getHackathonData();
    console.log(this.Data);
  }

  cm(c: any) {
    console.log(c);
    console.log(c['target'].id);
  }
  p(e: any) {
    alert(e.target.parentNode.id);
  }
  dataActive: any = 'Live';

  createNewHackathon() {
    this.router.navigateByUrl('/home/create-hackathon');
  }
  sortc() {
    alert('sort pressed');
  }
}
