import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { HomeRoutingModule } from './home-routing.module';
import { HomeHeaderComponent } from './home-header/home-header.component';
import { HomeContentComponent } from './home-content/home-content.component';
import { HomeLandingPageComponent } from './home-landing-page/home-landing-page.component';
import { UserHomeComponent } from './user-home/user-home.component';
import { CreateHackathonComponent } from './create-hackathon/create-hackathon.component';
import { HackathonDetailsComponent } from './hackathon-details/hackathon-details.component';

@NgModule({
  declarations: [
    HomeHeaderComponent,
    HomeContentComponent,
    HomeLandingPageComponent,
    UserHomeComponent,
    CreateHackathonComponent,
    HackathonDetailsComponent,
  ],
  imports: [CommonModule, HomeRoutingModule, FormsModule, ReactiveFormsModule],
})
export class HomeModule {}
