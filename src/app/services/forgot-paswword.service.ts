import { Injectable } from '@angular/core';
import {HttpClient, HttpParams} from '@angular/common/http';
import {Observable} from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class ForgotPaswwordService {

  private baseUrl  = "http://localhost:9090/reset";
  constructor(private  httpClient: HttpClient) { }
  public forgotPassword (email: string): Observable<any> {
  let params = new HttpParams();
  params = params.set('email',email);
    return this.httpClient.get(this.baseUrl, {params} );
  }

  checkCode(pwd: any) : Observable<any> {
    let params = new HttpParams();
    params = params.set('email',pwd.email);
    params = params.set('code',pwd.code);
    return this.httpClient.get(this.baseUrl+'/checkCode', {params} );
  }

  changePwd(pwd: any): Observable<any> {
    return this.httpClient.put(this.baseUrl, pwd );
  }
}
