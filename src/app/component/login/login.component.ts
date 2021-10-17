import { Component, OnInit } from '@angular/core';
import { HackathonService } from 'src/app/hackathon.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  constructor(private hackathon: HackathonService) {}

  ngOnInit(): void {}
  employeeId = '';
  login() {
    console.log(this.employeeId);
    this.hackathon.setUserId(this.employeeId);
  }
}
