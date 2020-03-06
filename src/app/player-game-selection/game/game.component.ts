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
    let btn1 = document.getElementsByClassName('g1');
    let btn2 = document.getElementsByClassName('g2');
    this.gameS.chooseGame(el.value);
    el.classList.toggle("newg");
    if (el === document.getElementsByClassName('g1')) {
      el.classList.toggle("newg1");
    } else {
      el.classList.toggle("newg2"); // решить вопрос со стилями
    }
  }

}

