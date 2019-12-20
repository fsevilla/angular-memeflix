import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private storageItem:string = 'memflix-session';

  constructor() { }

  saveToken(token) {
    localStorage.setItem(this.storageItem, JSON.stringify(token));
  }


}
