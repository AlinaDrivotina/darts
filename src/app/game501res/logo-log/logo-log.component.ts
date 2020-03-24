import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PlayerService } from 'src/app/first-page/player.service';
import { InputOutputP501Service } from '../input-output-p501.service';
import { GameService } from 'src/app/player-game-selection/game.service';

@Component({
    selector: 'app-logo-log',
    templateUrl: './logo-log.component.html',
    styleUrls: ['./logo-log.component.scss']
})
export class LogoLogComponent implements OnInit {

    constructor(private router: Router,
        private pointsS: InputOutputP501Service,
        private playerS: PlayerService,
        private gameS: GameService) { }

    ngOnInit(): void {
    }

    public startNewGame() {
        this.playerS.cleanPlayers();
        this.pointsS.cleanAll();
        this.gameS.cleanGame();
        this.router.navigate(['/selection']); // зачистка страницы с игрой 
    }
}
