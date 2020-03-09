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

  constructor(private gameS: GameService,
    public playerS: PlayerService,
    private router: Router
    ) { }

  ngOnInit(): void {
  }

  startGame() {
    let game = this.gameS.getGame();
    let player = this.playerS.pushingPlayer();
    if (game === '301' && player != undefined) {
      this.router.navigate(['/game-301'])
    } else if (game === undefined && player === undefined) {
      return;
    } else if (game  === '301' && player === undefined) {
      return;
    } else if (game === undefined && player != undefined) {
      return;
    }
    
  } 
}
