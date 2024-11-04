import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private apiUrl = 'http://localhost:8080/api/login';

  constructor(private http: HttpClient) { }

  login(username: string, password: string): Observable<any> {      
      const body = {username, password};
      return this.http.post<any>(this.apiUrl, body, {headers: { 'Content-Type': 'application/json'}
      });
  }
}
