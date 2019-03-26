import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

import {Abonne} from '../model/abonne';

@Injectable({
  providedIn: 'root'
})
export class AbonneService {
  private baseUrl  = "http://localhost:9090/abonnee";
  constructor(private  httpClient: HttpClient) { }
  public getAllAbonne() : Observable<Abonne[]>{

    return this.httpClient.get<Abonne[]>(this.baseUrl);
  }


}
