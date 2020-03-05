import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GameService {
  game: string = '';

  chooseGame(numberGame: any) {
    this.game = numberGame;
  }

  getGame() {
    return this.game;
  }
  constructor() { }
}
