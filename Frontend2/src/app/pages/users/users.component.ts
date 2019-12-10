import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/models/User';
import { UserService } from 'src/app/services/user.service';
import {MatTableDataSource} from '@angular/material/table';
import { AuthService } from 'src/app/services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

  protected users: User[];

  constructor(
    private userService: UserService,
    private authService: AuthService,
    private router: Router
    ) { }

  async ngOnInit() {
    this.users = await this.userService.getUsers();
  }

  delete(id: number) {
    this.userService.deleteUser(id)
    .then(res => {
      console.log(res);
      this.ngOnInit();
    },
    err => {
      alert('You cannot delete this article!');
    });
  }
}
