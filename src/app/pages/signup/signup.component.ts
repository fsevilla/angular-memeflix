import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  form:FormGroup;

  constructor(private formBuilder:FormBuilder) { }

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
      console.log('Form', this.form);
    } else {
      console.log('faltan datos');
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
