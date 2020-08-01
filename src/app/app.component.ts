import { AuthService } from './auth/auth.service';
import { Component, OnInit } from '@angular/core';

import { Router } from '@angular/router';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'League Side';
  user: firebase.User;
  constructor(private auth: AuthService, 
    private router: Router) { }
  
    ngOnInit() {
    this.auth.getUserState()
      .subscribe( user => {
        this.user = user;
      })
  }
  logout() {
    this.auth.logout();
    this.router.navigate(['/home']);
    
  }
  login() {
    this.router.navigate(['/login']);
   // this.auth.destroy();
  }
  register() {
    this.router.navigate(['/register']);
    //this.auth.destroy();
  }

}
