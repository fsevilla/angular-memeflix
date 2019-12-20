import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from './../../../environments/environment';

import { AuthService } from './../../common/services/auth.service';

@Injectable({
  providedIn: 'root'
})
export class MovieService {

  constructor(private httpClient:HttpClient, private authService:AuthService) {}

  getMovies():Promise<any> {
    const token = this.authService.getToken();
    
    let headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': token
    });

    const url = `${environment.apiUrl}${environment.apiPath}/movies`;
    
    return this.httpClient.get(url, {headers}).toPromise();
  }
}
