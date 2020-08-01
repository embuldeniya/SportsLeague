import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from '../auth/auth.service';
import { take, map, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(private auth: AuthService, private router: Router) {}

  canActivate(next: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> {

      return this.auth.getUserState().pipe(
           take(1),
           map(user => !!user), 
           tap(loggedIn => {
             if (!loggedIn) {
               window.alert ('Need to Login First')
               console.log('access denied');
               this.router.navigate(['/login']);
             }
             
         })
    )
  }
}