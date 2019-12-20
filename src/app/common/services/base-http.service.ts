import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class BaseHttpService {

  constructor(private httpClient:HttpClient, private authService:AuthService) { }

  get(url) {
    const token = this.authService.getToken();
    
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': token
    });

    return this.httpClient.get(url, {headers});
  }
}
