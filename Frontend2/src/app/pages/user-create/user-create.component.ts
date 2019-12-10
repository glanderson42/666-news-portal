import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { User } from 'src/app/models/User';
import { Role } from 'src/app/models/Role';
import { AuthService } from 'src/app/services/auth.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-user-create',
  templateUrl: './user-create.component.html',
  styleUrls: ['./user-create.component.css']
})
export class UserCreateComponent implements OnInit {
  userForm: FormGroup = new FormGroup({
    username: new FormControl('', [Validators.required]),
    password: new FormControl('', [Validators.required]),
    firstName: new FormControl('', [Validators.required]),
    lastName: new FormControl('', [Validators.required]),
    role: new FormControl('', [Validators.required]),
  });

  protected hidePassword = true;
  keys = Object.keys;
  private roles = Role;
  isLoggedIn = false;
  newUser: User = {
    id: null,
    username: '',
    password: '',
    firstName: '',
    lastName: '',
    role: null
  };

  constructor(
    private userService: UserService,
    private authService: AuthService
  ) {
    this.isLoggedIn = this.authService.isLoggedIn;
  }

  ngOnInit() {
  }

  get getUsername() {
    return this.userForm.get('username');
  }
  get getPassword() {
    return this.userForm.get('password');
  }
  get getFirstName() {
    return this.userForm.get('firstName');
  }
  get getLastName() {
    return this.userForm.get('lastName');
  }
  get getRole() {
    return this.userForm.get('role');
  }

  submit() {
    this.newUser.username = this.getUsername.value;
    this.newUser.password = this.getPassword.value;
    this.newUser.firstName = this.getFirstName.value;
    this.newUser.lastName = this.getLastName.value;
    this.newUser.role = this.isLoggedIn ? this.getRole.value : this.roles.GUEST;
    this.userService.register(this.newUser)
    .then(
      err => console.log(err));
  }
}
