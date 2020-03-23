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

    ngOnInit(): void {}

    public startGame() {
        let game = this.gameS.getGame();
        let players = this.playerS.pushingPlayer();
        // let player = this.playerS.playerNickname();
        // if (player) {
        //     if (game === '301') {
        //         this.router.navigate(['/game-301'])
        //     } else if (game === '501') {
        //         this.router.navigate(['/game-501']);
        //     }
        // }
        if (players.length === 2 && game === '301') {
            this.router.navigate(['/game-301'])
        } else if (players.length !== 2 && game === '301') {
            if (players.length < 2) {
                alert('Please, choose 2 players.')
            }
            if (players.length > 2) {
                alert('Too much players');
            }
        }
        if (players.length === 3 && game === '501') {
            this.router.navigate(['/game-501']);
        } else if (players.length !== 3 && game === '501') {
            if (players.length < 3) {
                alert('Please, choose 3 players.')
            }
            if (players.length > 3) {
                alert('Too much players');
            }
        }
    } 
}
