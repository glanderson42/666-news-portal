import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/models/User';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

  protected users: User[];
  constructor(private userService: UserService) { }

  async ngOnInit() {
    this.users = await this.userService.getUsers();
  }

}
