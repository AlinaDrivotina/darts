import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { InputOutputPointsService } from '../input-output-points.service';
import { PlayerService } from 'src/app/first-page/player.service';

@Component({
    selector: 'app-logo-logo',
    templateUrl: './logo-logo.component.html',
    styleUrls: ['./logo-logo.component.scss']
})
export class LogoLogoComponent implements OnInit {

    constructor(private router: Router,
        private pointsService: InputOutputPointsService,
        private playerS: PlayerService) { }

    ngOnInit(): void {
    }

    public startNewGame() {
        this.pointsService.cleanAll();
        this.playerS.cleanPlayers();
        this.router.navigate(['/selection']); // зачистка страницы с игрой 
    }

}
