import { Component, OnInit } from '@angular/core';
import { PlayerService } from 'src/app/first-page/player.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-table-game-player',
  templateUrl: './table-game-player.component.html',
  styleUrls: ['./table-game-player.component.scss']
})
export class TableGamePlayerComponent implements OnInit {

  constructor(public playerS: PlayerService,
    private router: Router) { }

  ngOnInit(): void {
  }

  playerNickname = this.playerS.pushingPlayer();

  addAnotherPlayer() {
    this.router.navigate(['/selection']); // куда должна вести эта кнопка
  }

}
