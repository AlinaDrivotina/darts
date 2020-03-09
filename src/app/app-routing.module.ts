import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FirstPageComponent } from './first-page/first-page.component';
import { PlayerGameSelectionComponent } from './player-game-selection/player-game-selection.component';
import { ResultTableComponent } from './result-table/result-table.component';


const routes: Routes = [
  {path: 'new-player', component: FirstPageComponent},
  {path: 'selection', component: PlayerGameSelectionComponent},
  {path: 'game-301', component: ResultTableComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
