import { map } from 'rxjs/operators';
import { League } from './../models/league';

import { Injectable } from '@angular/core';

import { AngularFirestore, AngularFirestoreDocument, AngularFirestoreCollection  } from '@angular/fire/firestore';
import { Observable } from 'rxjs';



@Injectable({
  providedIn: 'root'
})
export class LeaguesService {
  leagueCollection: AngularFirestoreCollection<League>;
  league :Observable<League[]>;



  constructor(public afs:AngularFirestore) { 
   // this.league = this.afs.collection('league').valueChanges();
  
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

  getLeague(){
    return this.league;


  }
  addLeague(league: League){
    this.leagueCollection.add(league)

  }
}
