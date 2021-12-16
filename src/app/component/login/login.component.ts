import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HackathonService } from 'src/app/hackathon.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  constructor(private router: Router, private hackathon: HackathonService) {}

  ngOnInit(): void {}
  employeeId = '';
  login() {
    console.log(this.employeeId);
    this.hackathon.setUserId(this.employeeId);
    this.router.navigateByUrl('/home');
  }
}
