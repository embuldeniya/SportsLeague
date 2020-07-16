import { League } from './../models/league';
import { LeaguesService } from './../services/leagues.service';
import { Component} from '@angular/core';



@Component({
  selector: 'app-find-league',
  templateUrl: './find-league.component.html',
  styleUrls: ['./find-league.component.css']
})
export class FindLeagueComponent  {

  result = "";
  results = "";
  league: League []; 
  private counter = 0;
  private budget : number;
  
  

  constructor(private leaguesService:LeaguesService ) { }


  onSearch(latitude: string , longitude:string, radius:string, budget: string ){
  if (  latitude ===""  && longitude  ==="" && radius ==="" && budget ===""){
   
    this.league  = null;
    return  this.result = 'Please enter more-details  '
  }
  else{
    

    //this.calculate(latitude, longitude,radius)
    this.budget = parseInt(budget)

    const lat = parseFloat (latitude);
    const long = parseFloat (longitude);
    const miles = parseFloat (radius);
    

    //assume that earths radius 3,950 to 3,963 miles
    const rad = 3959

    //latitude boundaries 

    const maxlat = lat + this.radian_to_degrees(miles/rad);
    const minlat = lat - this.radian_to_degrees(miles/rad);


    //longitude boundaries 
    const maxlong = long + this.radian_to_degrees(miles / rad / (Math.cos(this.degress_to_radian(lat))));
    const minlong = long - this.radian_to_degrees(miles / rad / (Math.cos(this.degress_to_radian(lat))));

    this.leaguesService.getBudget(this.budget).subscribe(leagues => {
     
     
    this.league = leagues.filter(item =>
    
      
      item.Latitude >= minlat && item.Latitude <= maxlat 
      && item.Longitude >= minlong && item.Longitude <= maxlong)
     
 
     } ); 

    
    
      
    }

  
        return  this.result = "Search Query for", this.results = "Latitude: " + latitude + " Longitude: " + longitude + "\nRadius of "+ radius + " miles  \n and  a budget of $" +  budget;  
 

    }


  
    //trt to limit the budget --- seems to stuck with limiting the Firestore query 
    check(nu1 : number){

      this.counter += nu1; 

      console.log (this.counter , " , ",this.budget)
      if (this.counter<= this.budget){
        
        return true;
      }
      else{
        
        return false;

      }

      

    }
       
   
radian_to_degrees(radian: number) {

  var pi = Math.PI;
  return radian * (180/pi);
    
}


degress_to_radian(degress: number) {

  var pi = Math.PI;
  return degress * (pi/180);
    
}
}