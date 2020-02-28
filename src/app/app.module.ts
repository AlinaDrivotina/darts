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

@NgModule({
  declarations: [
    AppComponent,
    TitleComponent,
    FormComponent,
    FirstPageComponent,
    PlayerGameSelectionComponent
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
