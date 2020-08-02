
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
import { AngularFireAuthModule } from '@angular/fire/auth';
import { environment } from '../environments/environment.prod';
import {FormsModule} from '@angular/forms';
import { FirestoreQueryComponent } from './firestore-query/firestore-query.component';
import { FooterComponent } from './footer/footer.component';
import { LoginComponent } from './auth/login/login.component';
import { RegisterComponent } from './auth/register/register.component';
import { HomeComponent } from './home/home.component';
import { ForgetComponent } from './auth/forget/forget.component';




@NgModule({
  declarations: [
    AppComponent,
    AddLeagueComponent,
    FindLeagueComponent,
    FirestoreQueryComponent,
    FooterComponent,
    LoginComponent,
    RegisterComponent,
    HomeComponent,
    ForgetComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    AngularFireModule.initializeApp(environment.firebase,'sports-league-us'),
    AngularFirestoreModule,
    AngularFireAuthModule,

  ],
  providers: [LeaguesService],
  bootstrap: [AppComponent]
})
export class AppModule { }
