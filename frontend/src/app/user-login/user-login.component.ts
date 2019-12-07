import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';


@Component({
  selector: 'app-user-login',
  templateUrl: './user-login.component.html',
  styleUrls: ['./user-login.component.css']
})
export class UserLoginComponent implements OnInit {


  constructor(
    private fb: FormBuilder
  ) { }

  loginForm = this.fb.group({
    username: ['']
  });


  ngOnInit() {

  }

  get username() {
    return this.loginForm.get('username');
  }
}
