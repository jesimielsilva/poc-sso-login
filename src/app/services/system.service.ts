import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { System } from '../shared/models/system.model';

@Injectable({
  providedIn: 'root'
})
export class SystemService {
  private apiUrl = 'http://localhost:8080/system';

  constructor(private http: HttpClient) { }

  create(sys: System): Observable<any> {
    return this.http.post<any>(this.apiUrl, sys, {
      headers: { 'Content-Type': 'application/json' }
    });
  }

  get(): Observable<System[]> {
    return this.http.get<any>(this.apiUrl, {
      headers: { 'Content-Type': 'application/json' }
    });
  }

  update(sys: System): Observable<any> {
    return this.http.put<any>(this.apiUrl, sys, {
      headers: { 'Content-Type': 'application/json' }
    });
  }

  delete(id: number): Observable<any> {
    return this.http.delete<any>(this.apiUrl+'/'+id,{
      headers: { 'Content-Type': 'application/json' }
    });
  }
}
