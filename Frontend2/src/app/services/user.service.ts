import { Injectable } from '@angular/core';
import { User } from '../models/User';
import { HttpService } from './http.service';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private route = 'users';

  constructor(private httpService: HttpService) {}

  public getUsers(): Promise<User[]> {
    return this.httpService.get<User[]>(this.route);
  }

  public getUser(id: User): Promise<User[]> {
    return this.httpService.get<User[]>(this.route + '/' + id);
  }
}
