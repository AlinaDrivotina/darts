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

  public gameSelection(e) {
    let el = e.target;
    let btn1 = document.getElementsByClassName('g1')[0];
    let btn2 = document.getElementsByClassName('g2')[0];
    this.gameS.chooseGame(el.value);
    el.classList.toggle("newg");

    if  (btn1 === el)  {
      btn1.classList.toggle("newg1");
      if (btn2.classList.contains('newg2') === true) {
        btn2.classList.toggle('newg2', false);
      }
    } else if (btn2 === el) {
      btn2.classList.toggle("newg2"); 
      if (btn1.classList.contains('newg1') === true) {
        btn1.classList.toggle('newg1', false);
      }
    }
  }

}

