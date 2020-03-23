import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PlayerService } from 'src/app/first-page/player.service';
import { GameService } from '../game.service';

@Component({
    selector: 'app-players',
    templateUrl: './players.component.html',
    styleUrls: ['./players.component.scss']
})
export class PlayersComponent implements OnInit {

    public searchingPlayer: string;
    public ind: number;
    public filter: any;

    constructor(private router: Router,
        public playerS: PlayerService,
        public gameS: GameService
    ) { }

    
    ngOnInit(): void {
        this.filter = null;
    }

    public newPlayer() {
        this.router.navigate(['/new-player']);
    }

    public deleteUser(i: number) {
        let arrayOfPlayers = this.playerS.getNewPlayer(this.filter);
        arrayOfPlayers.splice(i, 1);
    }

    public userSelected(i: number) {
        let arrayOfSelectedPlayers = document.getElementsByClassName('user');
        this.playerS.selectedPlayer(i);
        if (this.ind !== i && this.ind !== undefined) {
            arrayOfSelectedPlayers[this.ind].classList.toggle('selected', false);
            arrayOfSelectedPlayers[i].classList.toggle('selected', true);
        } 
        arrayOfSelectedPlayers[i].classList.toggle('selected', true);
        this.ind = i;
    }

    public searching() {
        this.filter = (<HTMLInputElement>document.getElementById('search')).value;
        this.playerS.getNewPlayer(this.filter);
    }

    // public searching() {
    //     let searchingPlayer = (<HTMLInputElement>document.getElementById('search')).value;
    //     let arr = this.playerS.getNewPlayer();

    //     arr = this.playerS.getNewPlayer().filter(el => {
    //         if(el.nickname === searchingPlayer) {
    //             document.getElementsByClassName('user')[this.playerS.getNewPlayer().indexOf(el)].classList.toggle('search');
    //         }
    //     });
    // }
  
}



