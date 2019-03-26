import { Injectable } from '@angular/core';
import {ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot} from '@angular/router';
import {JwtHelperService} from '@auth0/angular-jwt';

@Injectable({
  providedIn: 'root'
})
export class LoginGuardService implements CanActivate {
  constructor(
    private router: Router) {
  }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {

    const jwtHelper: JwtHelperService = new JwtHelperService();
    if(jwtHelper.isTokenExpired(localStorage.getItem('token'))){

      return true;
    }



    // not logged in so redirect to login page with the return url
    this.router.navigate(['/']);
    return false;
  }
}
