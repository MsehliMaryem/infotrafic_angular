import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Personne} from '../model/personne';

@Injectable({
  providedIn: 'root'
})
export class ForgotPaswwordService {

  private baseUrl  = "http://localhost:9090/forgotpassword";
  constructor(private  httpClient: HttpClient) { }
  public forgotPassword (personne:Personne ): Observable<any> {

    return this.httpClient.post(this.baseUrl,personne, {observe:'response'});
  }
}
