import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from './../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private httpClient:HttpClient) { }

  login(credentials) {
    const data = {
      username: credentials.email,
      password: credentials.password
    }
    const url = environment.apiUrl + '/login';
    return this.httpClient.post(url, data);
  }
}
