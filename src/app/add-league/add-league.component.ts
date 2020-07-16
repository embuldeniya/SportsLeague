//Tharinda Embuldeniya 
import { League } from './../models/league';
import { LeaguesService } from './../services/leagues.service';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-add-league',
  templateUrl: './add-league.component.html',
  styleUrls: ['./add-league.component.css']
})
export class AddLeagueComponent implements OnInit {

  
  league: League = {
    league_name: "",
    Price : 0,
    Latitude:0,
    Longitude:0.
   
  }
    result = " ";
  constructor(private leagueService: LeaguesService) { }

  ngOnInit(): void {
  }

  // adding form data by onClick - submit
  onSubmit(){
    if (this.league.league_name != '' && this.league.Price != 0){
      this.leagueService.addLeague(this.league);
      this.result = "Successfully Added: " + this.league.league_name + " for " + this.league.Price
      this.league.league_name ='';
      this.league.Price = 0;
      this.league.Latitude= 0;
      this.league.Longitude=0;
     

    }
    else{
      this.result = "Enter more details"

    }



  }

}
