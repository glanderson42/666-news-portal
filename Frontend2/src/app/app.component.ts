import { Component, OnInit} from '@angular/core';
import { AuthService } from './services/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'Frontend2';

  constructor (
    private authService: AuthService
  ) {}

  ngOnInit() {
    if (window.localStorage.getItem('token')) {
      this.authService.loginWithToken();
    }
  }
}
