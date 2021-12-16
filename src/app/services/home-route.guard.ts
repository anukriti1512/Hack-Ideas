import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  CanActivate,
  Router,
  RouterStateSnapshot,
  UrlTree,
} from '@angular/router';
import { Observable } from 'rxjs';
import { HackathonService } from '../hackathon.service';

@Injectable({
  providedIn: 'root',
})
export class HomeRouteGuard implements CanActivate {
  constructor(private route: Router, private hackathon: HackathonService) {}
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ):
    | Observable<boolean | UrlTree>
    | Promise<boolean | UrlTree>
    | boolean
    | UrlTree {
    let loggedInuser = this.hackathon.getLoggedInUser();

    if (loggedInuser !== '') {
      return true;
    } else {
      this.route.navigateByUrl('/login');
      return false;
    }
  }
}
