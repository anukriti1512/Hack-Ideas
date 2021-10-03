import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateHackathonComponent } from './create-hackathon/create-hackathon.component';
import { HomeLandingPageComponent } from './home-landing-page/home-landing-page.component';
import { UserHomeComponent } from './user-home/user-home.component';

const routes: Routes = [
  {
    path: '',
    component: HomeLandingPageComponent,
    children: [
      { path: '', component: UserHomeComponent },
      { path: 'create-hackathon', component: CreateHackathonComponent },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HomeRoutingModule {}
