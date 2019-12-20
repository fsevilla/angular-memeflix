import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private storageItem:string = 'memflix-session';
  private userItem:string = 'memflix-user';

  loginStatus = new BehaviorSubject<boolean>(false);

  constructor() { }

  saveToken(token) {
    localStorage.setItem(this.storageItem, JSON.stringify(token));
    this.loginStatus.next(true);
  }

  getToken() {
    const item = localStorage.getItem(this.storageItem);
    return item ? JSON.parse(item).token : '';
  }

  clearToken() {
    localStorage.removeItem(this.storageItem);
    this.clearUser();
    this.loginStatus.next(false);
  }

  saveUser(user) {
    delete user['_id'];
    localStorage.setItem(this.userItem, JSON.stringify(user));
  }

  getUser() {
    const item = localStorage.getItem(this.userItem);
    return item ? JSON.parse(item) : {};
  }

  clearUser() {
    localStorage.removeItem(this.userItem);
  }

  isLoggedIn():boolean {
    return !!this.getToken();
  }


}
