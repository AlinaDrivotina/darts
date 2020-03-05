import { Component, OnInit } from '@angular/core';
import { GameService } from '../game.service';

@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.scss']
})
export class GameComponent implements OnInit {

  constructor(private gameS: GameService) { }

  ngOnInit(): void {
  }

  gameSelection(e) {
    let el = e.target;
    this.gameS.chooseGame(el.value);
    alert(el.value);
  }

}

