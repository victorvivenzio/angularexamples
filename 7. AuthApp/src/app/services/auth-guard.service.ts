import { Injectable } from '@angular/core';
import {ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, Router} from '@angular/router';
import {AuthService} from './auth.service';


@Injectable()
export class AuthGuardService implements CanActivate {

  constructor(
    public auth: AuthService
  ) { }

  public canActivate(next: ActivatedRouteSnapshot, status: RouterStateSnapshot): boolean {
    if ( this.auth.isAuthenticated() ) {
      console.log('aceptado');
      return true;
    } else {
      console.log('bloqueado')
      return false;
    }
  }

}
