import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Admin} from '../model/admin';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {
  private baseUrl  = "http://localhost:9090/login";
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
}
