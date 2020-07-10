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
    Price : 0


  }

  constructor(private leagueService: LeaguesService) { }

  ngOnInit(): void {
  }

  onSubmit(){
    if (this.league.league_name != '' && this.league.Price != 0){
      this.leagueService.addLeague(this.league);
      this.league.league_name ='';
      this.league.Price


    }



  }

}
