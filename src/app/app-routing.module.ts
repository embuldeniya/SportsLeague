import { FindLeagueComponent } from './find-league/find-league.component';
import { AddLeagueComponent } from './add-league/add-league.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
    {path: '', redirectTo: '/', pathMatch: 'full'},
  {path: 'add', component: AddLeagueComponent},
  {path: 'find', component: FindLeagueComponent},



];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})


export class AppRoutingModule { }
