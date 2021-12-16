import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeRouteGuard } from 'src/app/services/home-route.guard';
import { CreateHackathonComponent } from './create-hackathon/create-hackathon.component';
import { HackathonDetailsComponent } from './hackathon-details/hackathon-details.component';
import { HomeLandingPageComponent } from './home-landing-page/home-landing-page.component';
import { UserHomeComponent } from './user-home/user-home.component';

const routes: Routes = [
  {
    path: '',
    component: HomeLandingPageComponent,
    canActivate: [HomeRouteGuard],
    children: [
      { path: '', component: UserHomeComponent, canActivate: [HomeRouteGuard] },
      {
        path: 'create-hackathon',
        component: CreateHackathonComponent,
        canActivate: [HomeRouteGuard],
      },
      {
        path: 'hackathon-details/:id',
        component: HackathonDetailsComponent,
        canActivate: [HomeRouteGuard],
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HomeRoutingModule {}
