import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FirstPageComponent } from './first-page/first-page.component';
import { PlayerGameSelectionComponent } from './player-game-selection/player-game-selection.component';
import { ResultTableComponent } from './result-table/result-table.component';
import { Game501resComponent } from './game501res/game501res.component';


const routes: Routes = [
    { path: '', redirectTo: 'new-player', pathMatch: 'full' },
    { path: 'new-player', component: FirstPageComponent },
    { path: 'selection', component: PlayerGameSelectionComponent },
    { path: 'game-301', component: ResultTableComponent },
    { path: 'game-501', component: Game501resComponent} 
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }
