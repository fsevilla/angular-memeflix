import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';

import { AuthService } from './../services/auth.service';

@Injectable({
  providedIn: 'root'
})
export class RoleGuard implements CanActivate {

  constructor(private authService:AuthService, private router:Router) {}

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    return this.hasRole(next.data.role);
  }

  hasRole(role) {
    const currentRole = this.authService.getUser().role;
    const isSame = currentRole === role;
    if(!isSame) {
      this.router.navigate(['forbidden']);
    }
    return isSame;
  }
  
}
