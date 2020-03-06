import { Component, OnInit } from '@angular/core';
import { PlayerService } from 'src/app/first-page/player.service';

@Component({
  selector: 'app-table-game-player',
  templateUrl: './table-game-player.component.html',
  styleUrls: ['./table-game-player.component.scss']
})
export class TableGamePlayerComponent implements OnInit {

  constructor(public playerS: PlayerService) { }

  ngOnInit(): void {
  }

  playerNickname = this.playerS.pushingPlayer();

}
