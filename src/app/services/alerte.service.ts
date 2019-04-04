import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Alerte} from '../model/alerte';

@Injectable({
  providedIn: 'root'
})
export class AlerteService {
  private baseUrl  = "http://localhost:9090/alerte";
  constructor(private  httpClient: HttpClient) { }
  public getAllAlerte() : Observable<Alerte[]>{

    return this.httpClient.get<Alerte[]>(this.baseUrl);
  }
}
