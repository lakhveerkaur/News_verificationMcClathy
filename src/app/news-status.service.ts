import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { Observable, throwError } from 'rxjs';

const httpOptions = {
 headers: new HttpHeaders({
   'Content-Type':  'application/json'
 })
};
interface News {
    status: string;
}

@Injectable({
  providedIn: 'root'
})
export class NewsStatusService {

  constructor(private http: HttpClient) { }

  status:string="Partially Fake";


  postStatus(data) {
    console.log("logs before post call---",data);
    return this.http.post('/saveStatus', {status: data})
                    .subscribe();
   }
}
