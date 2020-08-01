import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-forget',
  templateUrl: './forget.component.html',
  styleUrls: ['./forget.component.css']
})
export class ForgetComponent implements OnInit {

  authError: any;

  constructor(private auth: AuthService) { }

  ngOnInit() {

    
    this.auth.eventAuthError$.subscribe( data => {
      this.authError = data;
    });
  }
  reset(frm) {
    this.auth.reset(frm.value.email);
  }

}
