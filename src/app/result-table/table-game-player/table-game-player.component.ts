import { Component, OnInit, ChangeDetectorRef, ChangeDetectionStrategy } from '@angular/core';
import { PlayerService } from 'src/app/first-page/player.service';
import { Router } from '@angular/router';
import { InputOutputPointsService } from '../input-output-points.service';
import { GameService } from 'src/app/player-game-selection/game.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
    changeDetection: ChangeDetectionStrategy.OnPush,
    selector: 'app-table-game-player',
    templateUrl: './table-game-player.component.html',
    styleUrls: ['./table-game-player.component.scss']
})
export class TableGamePlayerComponent implements OnInit {

    public pointsForm: FormGroup;
    public firstSubmit1: boolean;
    public secondSubmit1: boolean;
    public thirdSubmit1: boolean;

    public firstSubmit2: boolean;
    public secondSubmit2: boolean;
    public thirdSubmit2: boolean;

    constructor(public playerS: PlayerService,
        private router: Router,
        private gameS: GameService,
        private pointsService: InputOutputPointsService,
        public changeDetectorRef: ChangeDetectorRef,
        public formBuilder: FormBuilder,
    ) {
        this.pointsForm = this.formBuilder.group({
        dart1: [null, Validators.required],
        dart2: [null, Validators.required],
        dart3: [null, Validators.required]
        });
    }

    ngOnInit(): void {
        this.firstSubmit1 = true;
        this.secondSubmit1 = true;
        this.thirdSubmit1 = true;
        this.firstSubmit2 = true;
        this.secondSubmit2 = true;
        this.thirdSubmit2 = true;
    }

    get dart1() {
        return this.pointsForm.get('dart1');
    }

    get dart2() {
        return this.pointsForm.get('dart2');
    }

    get dart3() {
        return this.pointsForm.get('dart3');
    }


    public addAnotherPlayer() {
        let game = this.gameS.getGame();
        let length = this.playerS.pushingPlayer().length;
        if (game === '301' && length === 2) {
            return;
        }
        this.playerS.counter = 1;
        this.router.navigate(['/selection']); 
    }

    public submitPoints(e: any) {
        if (this.pointsForm.invalid) { return; }

        if (e.target === document.getElementsByClassName('submitPoints')[0]) { 
            this.pointsService.inputPointsForPlayer(this.pointsForm.value);

            (document.getElementsByClassName('gamePointsForPlayer')[0].getElementsByClassName('text')[0] as HTMLInputElement).value = '';
            (document.getElementsByClassName('gamePointsForPlayer')[0].getElementsByClassName('text')[1] as HTMLInputElement).value = '';
            (document.getElementsByClassName('gamePointsForPlayer')[0].getElementsByClassName('text')[2] as HTMLInputElement).value = '';

            if (this.firstSubmit1 === true) {
                document.getElementsByClassName('gamePointsForPlayer')[0].getElementsByClassName('step1')[0].classList.toggle('newStep1', true);
                document.getElementsByClassName('gamePointsForPlayer')[0].getElementsByClassName('step1')[1].classList.toggle('newStep1', true);
                document.getElementsByClassName('gamePointsForPlayer')[0].getElementsByClassName('step1')[2].classList.toggle('newStep1', true);
        
                document.getElementsByClassName('gamePointsForPlayer')[0].getElementsByClassName('step2')[0].classList.toggle('newStep2', true);
                document.getElementsByClassName('gamePointsForPlayer')[0].getElementsByClassName('step2')[1].classList.toggle('newStep2', true);
                document.getElementsByClassName('gamePointsForPlayer')[0].getElementsByClassName('step2')[2].classList.toggle('newStep2', true);

                this.firstSubmit1 = false;
                if (this.secondSubmit1 === false) {
                    this.secondSubmit1 = true;
                }
            } else if (this.secondSubmit1 === true) {
                document.getElementsByClassName('gamePointsForPlayer')[0].getElementsByClassName('step2')[0].classList.toggle('newStep2', false);
                document.getElementsByClassName('gamePointsForPlayer')[0].getElementsByClassName('step2')[1].classList.toggle('newStep2', false);
                document.getElementsByClassName('gamePointsForPlayer')[0].getElementsByClassName('step2')[2].classList.toggle('newStep2', false)

                document.getElementsByClassName('gamePointsForPlayer')[0].getElementsByClassName('step3')[0].classList.toggle('newStep3', true);
                document.getElementsByClassName('gamePointsForPlayer')[0].getElementsByClassName('step3')[1].classList.toggle('newStep3', true);
                document.getElementsByClassName('gamePointsForPlayer')[0].getElementsByClassName('step3')[2].classList.toggle('newStep3', true);

                this.secondSubmit1 = false;
                if (this.thirdSubmit1 === false) {
                    this.thirdSubmit1 = true;
                }
            } else if (this.thirdSubmit1 === true) {
                document.getElementsByClassName('gamePointsForPlayer')[0].getElementsByClassName('step3')[0].classList.toggle('newStep3', false);
                document.getElementsByClassName('gamePointsForPlayer')[0].getElementsByClassName('step3')[1].classList.toggle('newStep3', false);
                document.getElementsByClassName('gamePointsForPlayer')[0].getElementsByClassName('step3')[2].classList.toggle('newStep3', false);

                document.getElementsByClassName('gamePointsForPlayer')[0].getElementsByClassName('step1')[0].classList.toggle('newStep1', false);
                document.getElementsByClassName('gamePointsForPlayer')[0].getElementsByClassName('step1')[1].classList.toggle('newStep1', false);
                document.getElementsByClassName('gamePointsForPlayer')[0].getElementsByClassName('step1')[2].classList.toggle('newStep1', false);

                this.thirdSubmit1 = false;
                if (this.firstSubmit1 === false) {
                    this.firstSubmit1 = true;
                }
            }
        this.pointsService.outputPointsForPlayer();

        } else if ( e.target === document.getElementsByClassName('submitPoints')[1] ) {
            this.pointsService.inputPointsForAnotherOlayer(this.pointsForm.value);

            (document.getElementsByClassName('gamePointsForPlayer')[1].getElementsByClassName('text')[0] as HTMLInputElement).value = '';
            (document.getElementsByClassName('gamePointsForPlayer')[1].getElementsByClassName('text')[1] as HTMLInputElement).value = '';
            (document.getElementsByClassName('gamePointsForPlayer')[1].getElementsByClassName('text')[2] as HTMLInputElement).value = '';

            if (this.firstSubmit2 === true) {
                document.getElementsByClassName('gamePointsForPlayer')[1].getElementsByClassName('step1')[0].classList.toggle('newStep1', true);
                document.getElementsByClassName('gamePointsForPlayer')[1].getElementsByClassName('step1')[1].classList.toggle('newStep1', true);
                document.getElementsByClassName('gamePointsForPlayer')[1].getElementsByClassName('step1')[2].classList.toggle('newStep1', true);
        
                document.getElementsByClassName('gamePointsForPlayer')[1].getElementsByClassName('step2')[0].classList.toggle('newStep2', true);
                document.getElementsByClassName('gamePointsForPlayer')[1].getElementsByClassName('step2')[1].classList.toggle('newStep2', true);
                document.getElementsByClassName('gamePointsForPlayer')[1].getElementsByClassName('step2')[2].classList.toggle('newStep2', true);
        
                this.firstSubmit2 = false;
                if (this.secondSubmit2 === false) {
                    this.secondSubmit2 = true;
                }
            } else if (this.secondSubmit2 === true) {
                document.getElementsByClassName('gamePointsForPlayer')[1].getElementsByClassName('step2')[0].classList.toggle('newStep2', false);
                document.getElementsByClassName('gamePointsForPlayer')[1].getElementsByClassName('step2')[1].classList.toggle('newStep2', false);
                document.getElementsByClassName('gamePointsForPlayer')[1].getElementsByClassName('step2')[2].classList.toggle('newStep2', false)
        
                document.getElementsByClassName('gamePointsForPlayer')[1].getElementsByClassName('step3')[0].classList.toggle('newStep3', true);
                document.getElementsByClassName('gamePointsForPlayer')[1].getElementsByClassName('step3')[1].classList.toggle('newStep3', true);
                document.getElementsByClassName('gamePointsForPlayer')[1].getElementsByClassName('step3')[2].classList.toggle('newStep3', true);
        
                this.secondSubmit2 = false;
                if (this.thirdSubmit2 === false) {
                    this.thirdSubmit2 = true;
                }
            } else if (this.thirdSubmit2 === true) {
                document.getElementsByClassName('gamePointsForPlayer')[1].getElementsByClassName('step3')[0].classList.toggle('newStep3', false);
                document.getElementsByClassName('gamePointsForPlayer')[1].getElementsByClassName('step3')[1].classList.toggle('newStep3', false);
                document.getElementsByClassName('gamePointsForPlayer')[1].getElementsByClassName('step3')[2].classList.toggle('newStep3', false);
        
                document.getElementsByClassName('gamePointsForPlayer')[1].getElementsByClassName('step1')[0].classList.toggle('newStep1', false);
                document.getElementsByClassName('gamePointsForPlayer')[1].getElementsByClassName('step1')[1].classList.toggle('newStep1', false);
                document.getElementsByClassName('gamePointsForPlayer')[1].getElementsByClassName('step1')[2].classList.toggle('newStep1', false);
        
                this.thirdSubmit2 = false;
                if (this.firstSubmit2 === false) {
                    this.firstSubmit2 = true;
                }
            }
            this.pointsService.outputPointsForAnotherPlayer();
            this.pointsService.result();
            this.changeDetectorRef.detectChanges();
        }
    
    }

}
