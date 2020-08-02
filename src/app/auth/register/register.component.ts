import { Component, OnInit } from '@angular/core';
import { AuthService } from './../auth.service';

import { Router } from '@angular/router';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  authError :any;

  constructor(private auth: AuthService ,private router: Router) { }

  ngOnInit() {
    this.auth.eventAuthError$.subscribe( data => {
      this.authError = data;
    });
    this.auth.getUserState()
      .subscribe( user => {
        if (user){
          
          this.router.navigate(['/home']);
        }
      });


  }



  createUser(frm) {
    this.auth.createUser(frm.value);
  }

}