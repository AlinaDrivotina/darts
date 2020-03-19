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

    public newPlayer() {
        this.router.navigate(['/new-player']);
    }

    public deleteUser(i: number) {
        let arrayOfPlayers = this.playerS.getNewPlayer();
        arrayOfPlayers.splice(i, 1);
    }

    public userSelected(i: number) {
        this.playerS.selectedPlayer(i);
        let arrayOfSelectedPlayers = document.getElementsByClassName('user');
        arrayOfSelectedPlayers[i].classList.toggle('selected');
    }

    public searching() {
        let searchingPlayer = (<HTMLInputElement>document.getElementById('search')).value;
        let arr = this.playerS.getNewPlayer();

        arr = this.playerS.getNewPlayer().filter(el => {
            if(el.nickname === searchingPlayer) {
                document.getElementsByClassName('user')[this.playerS.getNewPlayer().indexOf(el)].classList.toggle('search');
            }
        });
    }
  
}



