import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  signupForm = {
    email: '',
    password: ''
  };

  constructor() { }

  ngOnInit() {
  }

  signup() {
    console.log('The forms has been submitted!!');
  }

}
