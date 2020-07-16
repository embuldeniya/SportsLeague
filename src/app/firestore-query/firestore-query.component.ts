import { League } from './../models/league';
import { Component, OnInit } from '@angular/core';
import { LeaguesService } from './../services/leagues.service';

@Component({
  selector: 'app-firestore-query',
  templateUrl: './firestore-query.component.html',
  styleUrls: ['./firestore-query.component.css']
})
export class FirestoreQueryComponent implements OnInit {

  title = 'League Side';
 league: League []; 
 constructor(private leaguesService:LeaguesService) {
  
 }



  ngOnInit(): void {

    //display all documents from firestore collection
    this.leaguesService.getLeagues().subscribe(leag =>{

      this.league = leag;

    } );

  }
  //delete function based on row click 
  deleteLeague(event,league ){
    this.leaguesService.deleteLeague(league);

  }

}
//Tharinda Embuldeniya 