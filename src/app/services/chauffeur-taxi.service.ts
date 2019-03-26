import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Admin} from '../model/admin';
import {ChauffeurTaxi} from '../model/chauffeur-taxi';

@Injectable({
  providedIn: 'root'
})
export class ChauffeurTaxiService {
  private baseUrl  = "http://localhost:9090/chauffeurtaxi";
  constructor(private  httpClient: HttpClient) { }
  public getAllChauffeurTaxi() : Observable<ChauffeurTaxi[]>{
    return this.httpClient.get<ChauffeurTaxi[]>(this.baseUrl) ;
  }

}
