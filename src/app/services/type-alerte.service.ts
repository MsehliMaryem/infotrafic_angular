import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {StringResponse} from '../model/string-response';
import {TypeAlerte} from '../model/type-alerte';

@Injectable({
  providedIn: 'root'
})
export class TypeAlerteService {
  private baseUrl  = "http://localhost:9090/typeAlerte";
  constructor(private  httpClient: HttpClient) { }
  public getAllTypeAlerte() : Observable<TypeAlerte[]>{

    return this.httpClient.get<TypeAlerte[]>(this.baseUrl);
  }


  public deleteTypeAlerte(code : number) : Observable<StringResponse>{

    return this.httpClient.delete<StringResponse>(this.baseUrl+"/"+code);
  }


  public addTypeAlerte(typeAlerte :TypeAlerte) : Observable<StringResponse>{

    return this.httpClient.post<StringResponse>(this.baseUrl,typeAlerte);
  }

  public updateTypeAlerte(typeAlerte :TypeAlerte) : Observable<StringResponse>{

    return this.httpClient.put<StringResponse>(this.baseUrl,typeAlerte);
  }
}
