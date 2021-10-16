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
    title: ['', [Validators.required, this.noWhitespaceValidator]],
    tags: ['', [Validators.required, this.noWhitespaceValidator]],
    description: ['', [Validators.required, this.noWhitespaceValidator]],
    rules: ['', [Validators.required, this.noWhitespaceValidator]],
    prize: ['', [Validators.required]],
    // prize2: [''],
    endsOn: ['', [Validators.required, this.noWhitespaceValidator]],
    skills: ['', [Validators.required, this.noWhitespaceValidator]],
    createdBy: ['', [Validators.required, this.noWhitespaceValidator]],
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

  noWhitespaceValidator(control: FormControl) {
    const isWhitespace = (control.value || '').trim().length === 0;
    const isValid = !isWhitespace;
    return isValid ? null : { whitespace: true };
  }

  onSubmit() {
    console.log(this.CreateHackathonForm.value);

    console.log(this.CreateHackathonForm.status);
  }
}
