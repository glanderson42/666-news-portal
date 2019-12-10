import { Injectable } from '@angular/core';
import { User } from '../models/User';
import { HttpService } from './http.service';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private route = 'users';

  constructor(
    private httpService: HttpService,
    private router: Router
    ) {}

  public getUsers(): Promise<User[]> {
    return this.httpService.get<User[]>(this.route);
  }

  public getUser(id: User): Promise<User[]> {
    return this.httpService.get<User[]>(this.route + '/' + id);
  }

  public async register(user: User) {
    try {
      await this.httpService.post<User>(this.route + '/register', user);
      this.router.navigate(['']);
    } catch (e) {}
  }

  public async updateUser(id: number, user: User) {
    try {
      await this.httpService.put<User>(this.route + '/' + id, user);
      this.router.navigate(['']);
    } catch (e) {}
  }

  public deleteUser(id: number): Promise<User> {
    return this.httpService.delete<User>(this.route + '/' + id);
  }
}
