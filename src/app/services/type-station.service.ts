import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {TypeStation} from '../model/type-station';
import {StringResponse} from '../model/string-response';

@Injectable()
export class TypeStationService {

    private baseUrl  = "http://localhost:9090/typeStation";
  constructor(private  httpClient: HttpClient) { }

  public getAllTypeStation() : Observable<TypeStation[]>{

    return this.httpClient.get<TypeStation[]>(this.baseUrl);
  }


    public deleteTypeStation(code : number) : Observable<StringResponse>{

        return this.httpClient.delete<StringResponse>(this.baseUrl+"/"+code);
    }


  public addTypeStation(typeStation :TypeStation) : Observable<StringResponse>{

    return this.httpClient.post<StringResponse>(this.baseUrl,typeStation);
  }

  public updateTypeStation(typeStation :TypeStation) : Observable<StringResponse>{

    return this.httpClient.put<StringResponse>(this.baseUrl,typeStation);
  }
}
