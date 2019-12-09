import { Injectable } from '@angular/core';
import { HttpService } from './http.service';
import { Router } from '@angular/router';
import { User } from '../models/User';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  public isLoggedIn = false;
  public user: User = null;

  constructor(
    private httpService: HttpService,
    private router: Router
  ) { }

  public async login(username: string, password: string): Promise<User> {
    try {
      const token = btoa(username + ':' + password);
      window.localStorage.setItem('token', token);
      const user: User = await this.httpService.post('users/login', username) as User;
      this.isLoggedIn = true;
      this.user = user;
      console.log(user);
      return Promise.resolve(user);
    } catch (e) {
      window.localStorage.setItem('token', '');
      console.error(e);
      return Promise.reject();
    }
  }

  public logout() {
    this.isLoggedIn = false;
    this.user = null;
    window.localStorage.setItem('token', '');
    this.router.navigate(['/login']);
  }

  public loginWithToken() {
    const token = window.localStorage.getItem('token');
    const [username, password] = atob(token).split(':');
    this.login(username, password);
  }
}
