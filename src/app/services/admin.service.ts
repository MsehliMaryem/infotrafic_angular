import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Admin} from '../model/admin';
import {StringResponse} from '../model/string-response';

@Injectable({
  providedIn: 'root'
})
export class AdminService {
  private baseUrl  = "http://localhost:9090/admin";
  constructor(private  httpClient: HttpClient) { }


  public getAllAdmin() : Observable<Admin[]>{
    return this.httpClient.get<Admin[]>(this.baseUrl) ;
  }

  public deleteAdmin(code:number): Observable<StringResponse>{
    return this.httpClient.delete<StringResponse>(this.baseUrl+"/"+code);
  }

  public addAdmin(admin:Admin): Observable<StringResponse>{
    return this.httpClient.post<StringResponse>(this.baseUrl,admin);
  }
  public updateAdmin(admin:Admin): Observable<StringResponse>{
    return this.httpClient.put<StringResponse>(this.baseUrl,admin);
  }

}
