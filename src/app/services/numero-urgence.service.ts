import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {NumeroUrgence} from '../model/numero-urgence';
import {StringResponse} from '../model/string-response';



@Injectable({
  providedIn: 'root'
})
export class NumeroUrgenceService {
  private baseUrl  = "http://localhost:9090/numerourgence";

  constructor(private  httpClient: HttpClient) { }
  public getAllNumUrgence() : Observable<NumeroUrgence[]>{

    return this.httpClient.get<NumeroUrgence[]>(this.baseUrl);
  }

  public deleteNumerourgence(code : number) : Observable<StringResponse>{

    return this.httpClient.delete<StringResponse>(this.baseUrl+"/"+code);
  }

  public addNumeroUrgence(numeroUrgence:NumeroUrgence) : Observable<StringResponse>{

    return this.httpClient.post<StringResponse>(this.baseUrl,numeroUrgence);
  }

  public updateNumeroUrgence(numeroUrgence:NumeroUrgence) : Observable<StringResponse>{

    return this.httpClient.put<StringResponse>(this.baseUrl,numeroUrgence);
  }
}
