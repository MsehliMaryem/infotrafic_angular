import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Admin} from '../model/admin';
import {Observable} from 'rxjs';
import {JwtHelperService} from '@auth0/angular-jwt';
import {Personne} from '../model/personne';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {
  private baseUrl  = "http://localhost:9090/login";
  private jwtHelper: JwtHelperService = new JwtHelperService();

  constructor(private httpClient: HttpClient) { }

  public authenticate(admin: Admin): Observable<any> {

    return this.httpClient.post(this.baseUrl, admin, {observe:'response'});
  }


  public storeToken(token: string){
    localStorage.setItem('token', token);
  }

  public logout(){
    localStorage.removeItem('token');
    location.reload();
  }


  public getUser() : Admin {
   const decoded= this.jwtHelper.decodeToken(localStorage.getItem('token'));

    return JSON.parse(decoded.user);
  }

  isSuperAdmin () : boolean {
    const decoded= this.jwtHelper.decodeToken(localStorage.getItem('token'));
    const  role = decoded.roles[0];
    if (role.authority === 'ROLE_SuperAdmin'){

      return true;
    }
    return false;
  }
}
