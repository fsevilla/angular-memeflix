import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import {MatSnackBar} from '@angular/material/snack-bar';

import { SignupService } from './signup.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  form:FormGroup;
  errorMessage:string;

  constructor(
    private formBuilder:FormBuilder, 
    private signupService:SignupService,
    private router:Router,
    private snackBar:MatSnackBar
  ) { }

  ngOnInit() {
    this.form = this.formBuilder.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
      confirmation: ['', [Validators.required, Validators.minLength(6)]]
    }, {
      validators: this.matchPasswords.bind(this)
    });
  }

  submitForm() {
    if(this.form.valid) {
      this.signupService.register(this.form.getRawValue())
        .then(() => {
          this.router.navigate(['login']);
        })
        .catch(err => {
          this.snackBar.open(err.error.error, 'Error', {
            duration: 2000,
            verticalPosition: 'top'
          });
        });
    }
  }

  matchPasswords() {
    if(!this.form) { 
      console.log('no hay form');
      return;
    };
    const data = this.form.getRawValue();
    if(data.password === data.confirmation) {
      return null;
    } else {
      return {
        match: true
      }
    }
  }

  hasMatchError() {
    return this.form.hasError('match') && this.form.controls.password.errors === null && this.form.controls.confirmation.errors === null;
  }

}
