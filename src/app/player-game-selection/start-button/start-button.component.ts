import { Component, OnInit } from '@angular/core';
import { GameService } from '../game.service';
import { PlayerService } from 'src/app/first-page/player.service';
import { Router } from '@angular/router';

@Component({
    selector: 'app-start-button',
    templateUrl: './start-button.component.html',
    styleUrls: ['./start-button.component.scss']
})
export class StartButtonComponent implements OnInit {

    constructor(public gameS: GameService,
        public playerS: PlayerService,
        private router: Router
        ) { }

    ngOnInit(): void { 
    }

    public startGame() {
        let game = this.gameS.getGame();
        let players = this.playerS.pushingPlayer();
        if (players.length === 2 && game === '301') {
            this.router.navigate(['/game-301'])
        } 
        if (players.length === 3 && game === '501') {
            this.router.navigate(['/game-501']);
        } 
    }  
}
