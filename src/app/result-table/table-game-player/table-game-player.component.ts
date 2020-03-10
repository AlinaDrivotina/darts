import { Component, OnInit } from '@angular/core';
import { PlayerService } from 'src/app/first-page/player.service';
import { Router } from '@angular/router';
import { InputOutputPointsService } from '../input-output-points.service';
import { GameService } from 'src/app/player-game-selection/game.service';

@Component({
  selector: 'app-table-game-player',
  templateUrl: './table-game-player.component.html',
  styleUrls: ['./table-game-player.component.scss']
})
export class TableGamePlayerComponent implements OnInit {

  constructor(public playerS: PlayerService,
    private router: Router,
    private gameS: GameService,
    private pointsService: InputOutputPointsService
  ) { }

  ngOnInit(): void {
  }

  addAnotherPlayer() {
    let game = this.gameS.getGame();
    let length = this.playerS.pushingPlayer().length;
    if (game === '301' && length === 2) {
      return;
    }
    this.router.navigate(['/selection']); // куда должна вести эта кнопка ?? второстепенный вопрос
  }

  submit(e) {
    let el = (<HTMLInputElement>document.getElementsByClassName('text')[0]).value;
    alert(el);
  }

}
