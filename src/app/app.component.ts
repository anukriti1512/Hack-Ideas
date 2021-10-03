import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  employeeId = '';
  c() {
    console.log('btn clicked');
    console.log(this.employeeId);
  }
}
