
import { LeaguesService } from './services/leagues.service';

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AddLeagueComponent } from './add-league/add-league.component';
import { FindLeagueComponent } from './find-league/find-league.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { environment } from '../environments/environment.prod';
import {FormsModule} from '@angular/forms';
import { FirestoreQueryComponent } from './firestore-query/firestore-query.component';




@NgModule({
  declarations: [
    AppComponent,
    AddLeagueComponent,
    FindLeagueComponent,
    FirestoreQueryComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    AngularFireModule.initializeApp(environment.firebase,'sports-league-us'),
    AngularFirestoreModule,
 
  //  MatSidenavModule,
   // MatListModule
  ],
  providers: [LeaguesService],
  bootstrap: [AppComponent]
})
export class AppModule { }
