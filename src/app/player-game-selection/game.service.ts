import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root'
})
export class GameService {
    public game: string = '';
    public counter: number = 1;

    public chooseGame(numberGame: any) {
        let currGame = numberGame;
        if (currGame == this.game && this.counter != 1) {
            this.game = null;
            return;
        }
        this.game = numberGame;
        this.counter++;
    }

    public getGame() {
        return this.game;
    }

    public cleanGame() {
        this.game = '';
        this.counter = 1;
    }

}
