import { map } from 'rxjs/operators';
import { League } from './../models/league';
import { Injectable} from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument  } from '@angular/fire/firestore';
import { Observable } from 'rxjs';




@Injectable({
  providedIn: 'root'
})
export class LeaguesService {
  getBudget(price: number) {

    this.leagueCollection = this.afs.collection<League>('league', ref=>{

      return ref.where('Price', '<', price);
     
      
    
      
    });

    return   this.league = this.leagueCollection.valueChanges();
   /* return   this.league = this.leagueCollection.snapshotChanges()
    .pipe(
      
      map(
       changes => {
         return changes.map (a =>{
         const data = a.payload.doc.data() as League;
         data.id = a.payload.doc.id;
         return data;
       })
 
      
    })); */

    
  }
   
  leagueCollection: AngularFirestoreCollection<League>;
  league :Observable<League[]>;
  leagueDoc: AngularFirestoreDocument<League>;
  


  constructor(private afs:AngularFirestore ) { 
    this.leagueCollection = this.afs.collection('league');
    this.league =  this.leagueCollection
    .snapshotChanges()
    .pipe(map(
       changes => {
         return changes.map (a =>{
         const data = a.payload.doc.data() as League;
         data.id = a.payload.doc.id;
         return data;
       });
 
       
    }));

   
   }
 

 

  
  addLeague(league: League){
    this.leagueCollection.add(league)

  }

  getLeagues(){

    return this.league;
  }
  deleteLeague(league: League){
    this.leagueDoc = this.afs.doc(`league/${league.id}`);
    this.leagueDoc.delete();
  }

 }




