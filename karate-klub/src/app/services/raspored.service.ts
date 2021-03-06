import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';

import { Observable } from 'rxjs';

import { Raspored } from 'src/app/model/raspored';
//import { HttpEvent } from '@angular/common/http/src/response';
import { UserStoreService } from './user-store.service';

@Injectable()
export class RasporedService {

  constructor(private http: HttpClient, private userStore: UserStoreService) {}

  getRasporeds() : Observable<Raspored[]> {
    return this.http.get<Raspored[]>('/api/raspored');
  }

  getRaspored(code: string): Observable<Raspored> {
    return this.http.get<Raspored>('/api/raspored/' + code);
  }

  createRaspored(raspored: Raspored): Observable<any> {
    return this.http.post('/api/raspored', raspored);
  }

  changeRaspored(beginTimeP:string, endTimeP: string,rasporedCode:string): Observable<Raspored> {
    return this.http.patch<Raspored>('/api/raspored/' + rasporedCode,
      {
        beginTime: beginTimeP,
        endTime:endTimeP 
      });
  }
}