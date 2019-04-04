import { Injectable } from '@angular/core';
import {HttpClient, HttpParams} from '@angular/common/http';
import {Personne} from '../model/personne';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PersonneService {
  private baseUrl  = "http://localhost:9090/personne";
  constructor(private  httpClient: HttpClient) { }

  public activate(pers: Personne): Observable<any> {
    return this.httpClient.put(this.baseUrl, pers);
  }


  public changePwd(pwd: any): Observable<any> {
    return this.httpClient.put(this.baseUrl +'/pwd', pwd);
  }

  public checkPassword(pwd: any): Observable<any> {
    const options = new HttpParams().set('id', pwd.id).set('pwd',pwd.oldPassword);
    return this.httpClient.get<any>(this.baseUrl ,{params:options});
  }
}
