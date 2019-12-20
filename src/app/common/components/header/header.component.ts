import { Component, OnInit } from '@angular/core';

import { AuthService } from './../../services/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  isLoggedIn:boolean;

  constructor(private authService:AuthService) { }

  ngOnInit() {
    this.authService.loginStatus.subscribe(loggedIn => {
      this.isLoggedIn = loggedIn;
    });

    this.isLoggedIn = this.authService.isLoggedIn();
  }

}
