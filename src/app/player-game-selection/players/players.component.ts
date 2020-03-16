import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PlayerService } from 'src/app/first-page/player.service';

@Component({
  selector: 'app-players',
  templateUrl: './players.component.html',
  styleUrls: ['./players.component.scss']
})
export class PlayersComponent implements OnInit {

  constructor(private router: Router,
    public playerS: PlayerService,
    ) { }

 
  ngOnInit(): void {

  }

  newPlayer() {
    this.router.navigate(['/new-player']);
  }

  deleteUser(i) {
    let arrayOfPlayers = this.playerS.getNewPlayer();
    arrayOfPlayers.splice(i, 1);
  }

  userSelected(i) {
    let selectedPl = this.playerS.selectedPlayer(i);
  }

  searching() {
    let searchingPlayer = (<HTMLInputElement>document.getElementById('search')).value;
    let arr = this.playerS.getNewPlayer();

    arr = this.playerS.getNewPlayer().filter(el => {
      if(el.nickname === searchingPlayer) {
        document.getElementsByClassName('user')[this.playerS.getNewPlayer().indexOf(el)].classList.toggle('search');
      }
    });

  }
  
}


