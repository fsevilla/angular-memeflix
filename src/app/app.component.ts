import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { AuthService } from './common/services/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'memeflix';
  isLoggedIn:boolean;

  constructor(private authService:AuthService, private changeDetector:ChangeDetectorRef) { }

  ngOnInit() {
    this.authService.loginStatus.subscribe(loggedIn => {
      this.isLoggedIn = loggedIn;
      if(this.changeDetector) {
        this.changeDetector.detectChanges();
      }
    });

    this.isLoggedIn = this.authService.isLoggedIn();

  }

}
