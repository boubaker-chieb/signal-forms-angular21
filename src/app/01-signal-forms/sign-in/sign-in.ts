import { Component, signal } from '@angular/core';
import { SignInData } from '../models/signin-data';
import { email, Field, form, minLength, required } from '@angular/forms/signals';

@Component({
  selector: 'app-sign-in',
  imports: [Field],
  templateUrl: './sign-in.html',
  styleUrl: './sign-in.scss',
})
export class SignIn {
  signInModel = signal<SignInData>({
    email: '',
    pseudo: '',
    password: '',
  });
  form = form(this.signInModel, (schemaPath) => {
    // Email validators
    required(schemaPath.email, { message: 'Email is required'});
    email(schemaPath.email, { message: 'Please enter a valid email address'});
    // Pseudo validators
    required(schemaPath.pseudo, { message: 'Pseudo is required' });
    minLength(schemaPath.pseudo, 5, { message: 'Pseudo must contain at least 5 characters' });
    // Password validators
    required(schemaPath.password, { message: 'Password is requied'});
    minLength(schemaPath.password, 8, { message: 'Password must contain at least 8 characters' });
  });
  onSubmit() {
    console.log(this.signInModel());
  }
}
