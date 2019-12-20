import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private storageItem:string = 'memflix-session';

  loginStatus = new BehaviorSubject<boolean>(false);

  constructor() { }

  saveToken(token) {
    localStorage.setItem(this.storageItem, JSON.stringify(token));
    this.loginStatus.next(true);
  }

  getToken() {
    const item = localStorage.getItem(this.storageItem);
    return item ? JSON.parse(item) : '';
  }

  clearToken() {
    localStorage.removeItem(this.storageItem);
    this.loginStatus.next(false);
  }

  isLoggedIn():boolean {
    return !!this.getToken();
  }


}
