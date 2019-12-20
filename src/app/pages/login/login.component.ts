import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from './../../common/services/auth.service';

import {MatSnackBar} from '@angular/material/snack-bar';

import { LoginService } from './login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  form:FormGroup;

  error:boolean = false;

  constructor(
    private formBuilder:FormBuilder, 
    private loginService:LoginService,
    private snackBar:MatSnackBar,
    private router:Router,
    private authService:AuthService
  ) { }

  ngOnInit() {
    this.form = this.formBuilder.group({
     email: ['', [Validators.required, Validators.email]],
     password: ['', Validators.required] 
    });
  }

  submitForm() {
    if(this.form.valid) {
      this.loginService.login(this.form.getRawValue()).subscribe(response => {
        this.authService.saveToken(response);
        return this.loginService.getMe()
          .then(response => {
            this.authService.saveUser(response);
            this.router.navigate(['/']);
          })
          .catch(err => {
            this.authService.clearToken();
            this.handleError(err);
          });
      }, err => {
        this.handleError(err);
      });
    }
  }

  handleError(err) {
    this.error = true;
    this.snackBar.open(err.error.error, 'Error', {
      duration: 2000,
      verticalPosition: 'top'
    });
  }

}
