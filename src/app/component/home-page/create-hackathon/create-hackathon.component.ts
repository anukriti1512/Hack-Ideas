import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { FormBuilder } from '@angular/forms';
import { FormGroup, FormControl } from '@angular/forms';

import { Validators } from '@angular/forms';

@Component({
  selector: 'app-create-hackathon',
  templateUrl: './create-hackathon.component.html',
  styleUrls: ['./create-hackathon.component.css'],
})
export class CreateHackathonComponent implements OnInit {
  CreateHackathonForm = this.fb.group({
    title: ['', Validators.required],
    tags: ['', Validators.required],
    description: ['', Validators.required],
    rules: ['', Validators.required],
    prize: ['', Validators.required],
    // prize2: [''],
    endsOn: ['', Validators.required],
    skills: ['', Validators.required],
    createdBy: ['', Validators.required],
  });
  dateValue = new Date(Date.now()).toLocaleString().split(',')[0];

  constructor(private fb: FormBuilder) {}
  // title: string = '';
  // tags: string = '';
  // description: string = '';
  // rules: string = '';
  // prize1: any;
  // prize2: any;
  // endsOn: any;
  // skills: string = '';
  // createdBy: string = '';

  ngOnInit(): void {}
  onSubmit() {
    console.log(this.CreateHackathonForm.value);

    console.log(this.CreateHackathonForm.status);
  }
}
