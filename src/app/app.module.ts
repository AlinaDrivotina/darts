import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TitleComponent } from './first-page/title/title.component';
import { FormComponent } from './first-page/form/form.component';
import { FirstPageComponent } from './first-page/first-page.component';
import { PlayerGameSelectionComponent } from './player-game-selection/player-game-selection.component';
import { PlayerService } from './first-page/player.service';
import { LogoComponent } from './player-game-selection/logo/logo.component';
import { PlayersComponent } from './player-game-selection/players/players.component';
import { GameComponent } from './player-game-selection/game/game.component';
import { StartButtonComponent } from './player-game-selection/start-button/start-button.component';
import { ResultTableComponent } from './result-table/result-table.component';
import { LogoLogoComponent } from './result-table/logo-logo/logo-logo.component';
import { TableGamePlayerComponent } from './result-table/table-game-player/table-game-player.component';
import { PointsResultTableComponent } from './result-table/points-result-table/points-result-table.component';

@NgModule({
  declarations: [
    AppComponent,
    TitleComponent,
    FormComponent,
    FirstPageComponent,
    PlayerGameSelectionComponent,
    LogoComponent,
    PlayersComponent,
    GameComponent,
    StartButtonComponent,
    ResultTableComponent,
    LogoLogoComponent,
    TableGamePlayerComponent,
    PointsResultTableComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [PlayerService],
  bootstrap: [AppComponent]
})
export class AppModule { }
