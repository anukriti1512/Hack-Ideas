import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { FormBuilder } from '@angular/forms';
import { FormGroup, FormControl } from '@angular/forms';

import { Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { HackathonService } from 'src/app/hackathon.service';

@Component({
  selector: 'app-create-hackathon',
  templateUrl: './create-hackathon.component.html',
  styleUrls: ['./create-hackathon.component.css'],
})
export class CreateHackathonComponent implements OnInit {
  hackathoncount: Number = 0;

  CreateHackathonForm = this.fb.group({
    title: ['', [Validators.required, this.noWhitespaceValidator]],
    tags: ['', [Validators.required, this.noWhitespaceValidator]],
    description: ['', [Validators.required, this.noWhitespaceValidator]],
    Rules: ['', [Validators.required, this.noWhitespaceValidator]],
    prize: ['', [Validators.required]],
    // prize2: [''],
    endsOn: ['', [Validators.required, this.noWhitespaceValidator]],
    skills: ['', [Validators.required, this.noWhitespaceValidator]],
    createdBy: ['', [Validators.required, this.noWhitespaceValidator]],
  });
  dateValue = new Date(Date.now()).toLocaleString().split(',')[0];
  userId = '';
  showAlert = false;

  constructor(
    private fb: FormBuilder,
    private hackathon: HackathonService,
    private router: Router
  ) {
    this.userId = this.hackathon.getLoggedInUser();
  }

  ngOnInit(): void {
    let today = new Date().toISOString().split('T')[0];
    // year-month-day
    document.getElementsByName('d')[0].setAttribute('min', today);
  }

  //validator to validate that user is not entering only whitespace
  noWhitespaceValidator(control: FormControl) {
    const isWhitespace = (control.value || '').trim().length === 0;
    const isValid = !isWhitespace;
    return isValid ? null : { whitespace: true };
    document.getElementById;
  }

  onSubmit() {
    this.hackathoncount = this.hackathon.getTotalHackathonCount() + 1;
    this.CreateHackathonForm.value['creationDate'] = `${new Date()}`;
    this.CreateHackathonForm.value['id'] = `H${this.hackathoncount}`;
    let tagsArray = this.CreateHackathonForm.value.tags.split(',');

    this.CreateHackathonForm.value['tags'] = tagsArray;
    this.CreateHackathonForm.value['createdByUserId'] = this.userId;
    console.log(this.CreateHackathonForm.value);

    this.hackathon.updateHackathonIdea(this.CreateHackathonForm.value);
    this.hackathon.updateVotesCount(
      this.CreateHackathonForm.value.id,
      'create'
    );
    this.CreateHackathonForm.reset();
    console.log(this.CreateHackathonForm.status);
    this.router.navigateByUrl('/home');
  }
}
