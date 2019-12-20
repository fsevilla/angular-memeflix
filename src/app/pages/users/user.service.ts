import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { environment } from './../../../environments/environment';

import { AuthService } from './../../common/services/auth.service';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private httpClient:HttpClient, private authService:AuthService) { }

  getUsers():Promise<any> {

    const token = this.authService.getToken();

    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': token
    });


    const url = environment.apiUrl + environment.apiPath + '/users';
    return this.httpClient.get(url, {headers}).toPromise();
  }

}
