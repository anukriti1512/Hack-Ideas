import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HackathonService } from 'src/app/hackathon.service';

@Component({
  selector: 'app-home-header',
  templateUrl: './home-header.component.html',
  styleUrls: ['./home-header.component.css'],
})
export class HomeHeaderComponent implements OnInit {
  constructor(private router: Router, private hackathon: HackathonService) {}
  loggedInUser = '';
  ngOnInit(): void {
    this.loggedInUser = this.hackathon.getLoggedInUser();
  }
  logout() {
    this.router.navigateByUrl('/login');
  }
}
