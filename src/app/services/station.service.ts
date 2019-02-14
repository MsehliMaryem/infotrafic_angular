import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {TypeStation} from '../model/type-station';
import {StringResponse} from '../model/string-response';
import {Station} from '../model/station';

@Injectable({
  providedIn: 'root'
})
export class StationService {


  private baseUrl  = "http://localhost:9090/stationService";
  constructor(private  httpClient: HttpClient) { }

  public getAllStation() : Observable<Station[]>{

    return this.httpClient.get<Station[]>(this.baseUrl);
  }


  public deleteStation(code : number) : Observable<StringResponse>{

    return this.httpClient.delete<StringResponse>(this.baseUrl+"/"+code);
  }


  public addStation(station :Station) : Observable<StringResponse>{

    return this.httpClient.post<StringResponse>(this.baseUrl,station);
  }

  public updateStation(station :Station) : Observable<StringResponse>{

    return this.httpClient.put<StringResponse>(this.baseUrl,station);
  }
}
