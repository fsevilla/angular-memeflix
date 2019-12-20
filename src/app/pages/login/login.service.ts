import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from './../../../environments/environment';

import { AuthService } from './../../common/services/auth.service';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private httpClient:HttpClient, private authService:AuthService) { }

  login(credentials) {
    const data = {
      username: credentials.email,
      password: credentials.password
    }
    const url = environment.apiUrl + '/login';
    return this.httpClient.post(url, data);
  }

  getMe() {
    const token = this.authService.getToken();
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': token
    });

    const url = environment.apiUrl + '/me';
    return this.httpClient.get(url, {headers}).toPromise();
  }
}
