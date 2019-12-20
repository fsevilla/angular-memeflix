import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { environment } from './../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class SignupService {

  constructor(private httpClient: HttpClient) { }

  register(data) {
    const user = {
      name: data.name,
      email: data.email,
      password: data.password
    }

    const url = environment.apiUrl + '/signup';
    return this.httpClient.post(url, user).toPromise();
  }
}
