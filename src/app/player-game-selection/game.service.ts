import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GameService {
  public game: string = '';

  constructor() { }

  public chooseGame(numberGame: any) {
    this.game = numberGame;
  }

  public getGame() {
    return this.game;
  }
}
