import { HomeComponent } from './home/home.component';
import { FirestoreQueryComponent } from './firestore-query/firestore-query.component';
import { FindLeagueComponent } from './find-league/find-league.component';
import { AddLeagueComponent } from './add-league/add-league.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './auth/login/login.component';
import { RegisterComponent } from './auth/register/register.component';
import {AuthGuard} from './services/auth.guard'
import { ForgetComponent } from './auth/forget/forget.component';



const routes: Routes = [
  {path: 'login', component:LoginComponent  },
  {path: 'forget', component:ForgetComponent  },
  {path: 'register', component:RegisterComponent },
  {path: 'query', component: FirestoreQueryComponent,canActivate: [AuthGuard] },
  {path: 'add', component: AddLeagueComponent ,canActivate: [AuthGuard] },
  {path: 'find', component: FindLeagueComponent ,canActivate: [AuthGuard]},
  {path: 'home', component:HomeComponent },
  {path: '', redirectTo: '/home', pathMatch: 'full'},


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})


export class AppRoutingModule { }
