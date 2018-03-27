import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styles: []
})
export class NavbarComponent implements OnInit {

  constructor(
    public auth: AuthService
  ) {
    auth.handleAuthentication();
  }

  ngOnInit() {
  }

  public login(): void {
    this.auth.login();
  }

  public logout(): void {
    this.auth.logout();
  }
}
