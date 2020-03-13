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

  pointsForm: FormGroup;

  firstSubmit1: boolean = true;
  secondSubmit1: boolean = true;
  thirdSubmit1: boolean = true;

  firstSubmit2: boolean = true;
  secondSubmit2: boolean = true;
  thirdSubmit2: boolean = true;

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


  addAnotherPlayer() {
    let game = this.gameS.getGame();
    let length = this.playerS.pushingPlayer().length;
    if (game === '301' && length === 2) {
      return;
    }
    this.router.navigate(['/selection']); // куда должна вести эта кнопка ?? второстепенный вопрос
  }

  submitPoints(e) {
    if (this.pointsForm.invalid) { return; }

    if (e.target === document.getElementsByClassName('submitPoints')[0]) {
      this.pointsService.inputPointsForPlayer(this.pointsForm.value);

      (<HTMLInputElement>document.getElementsByClassName('gamePointsForPlayer')[0].getElementsByClassName('text')[0]).value = '';
      (<HTMLInputElement>document.getElementsByClassName('gamePointsForPlayer')[0].getElementsByClassName('text')[1]).value = '';
      (<HTMLInputElement>document.getElementsByClassName('gamePointsForPlayer')[0].getElementsByClassName('text')[2]).value = '';

      if (this.firstSubmit1 === true) {
        document.getElementsByClassName('gamePointsForPlayer')[0].getElementsByClassName('step1')[0].classList.toggle('newStep1');
        document.getElementsByClassName('gamePointsForPlayer')[0].getElementsByClassName('step1')[1].classList.toggle('newStep1');
        document.getElementsByClassName('gamePointsForPlayer')[0].getElementsByClassName('step1')[2].classList.toggle('newStep1');
  
        document.getElementsByClassName('gamePointsForPlayer')[0].getElementsByClassName('step2')[0].classList.toggle('newStep2');
        document.getElementsByClassName('gamePointsForPlayer')[0].getElementsByClassName('step2')[1].classList.toggle('newStep2');
        document.getElementsByClassName('gamePointsForPlayer')[0].getElementsByClassName('step2')[2].classList.toggle('newStep2');

        this.firstSubmit1 = false;
        this.secondSubmit1 = true;
      } else if (this.secondSubmit1 === true) {
        document.getElementsByClassName('gamePointsForPlayer')[0].getElementsByClassName('step2 newStep2')[0].classList.toggle('newStep2', false);
        document.getElementsByClassName('gamePointsForPlayer')[0].getElementsByClassName('step2 newStep2')[1].classList.toggle('newStep2', false);
        document.getElementsByClassName('gamePointsForPlayer')[0].getElementsByClassName('step2 newStep2')[2].classList.toggle('newStep2', false)

        document.getElementsByClassName('gamePointsForPlayer')[0].getElementsByClassName('step3')[0].classList.toggle('newStep3');
        document.getElementsByClassName('gamePointsForPlayer')[0].getElementsByClassName('step3')[1].classList.toggle('newStep3');
        document.getElementsByClassName('gamePointsForPlayer')[0].getElementsByClassName('step3')[2].classList.toggle('newStep3');

        this.secondSubmit1 = false;
        this.thirdSubmit1 = true;
      } else if (this.thirdSubmit1 === true) {
        document.getElementsByClassName('gamePointsForPlayer')[0].getElementsByClassName('step3 newStep3')[0].classList.toggle('newStep3', false);
        document.getElementsByClassName('gamePointsForPlayer')[0].getElementsByClassName('step3 newStep3')[1].classList.toggle('newStep3', false);
        document.getElementsByClassName('gamePointsForPlayer')[0].getElementsByClassName('step3 newStep3')[2].classList.toggle('newStep3', false);

        document.getElementsByClassName('gamePointsForPlayer')[0].getElementsByClassName('step1 newStep1')[0].classList.toggle('newStep1', false);
        document.getElementsByClassName('gamePointsForPlayer')[0].getElementsByClassName('step1 newStep1')[1].classList.toggle('newStep1', false);
        document.getElementsByClassName('gamePointsForPlayer')[0].getElementsByClassName('step1 newStep1')[2].classList.toggle('newStep1', false);

        this.thirdSubmit1 = false;
        this.firstSubmit1 = true;
      }

      this.pointsService.outputPointsForPlayer();
    } else if ( e.target === document.getElementsByClassName('submitPoints')[1] ) {
        this.pointsService.inputPountsForAnotherOlayer(this.pointsForm.value);
        (<HTMLInputElement>document.getElementsByClassName('gamePointsForPlayer')[1].getElementsByClassName('text')[0]).value = '';
        (<HTMLInputElement>document.getElementsByClassName('gamePointsForPlayer')[1].getElementsByClassName('text')[1]).value = '';
        (<HTMLInputElement>document.getElementsByClassName('gamePointsForPlayer')[1].getElementsByClassName('text')[2]).value = '';

        if (this.firstSubmit2 === true) {
          document.getElementsByClassName('gamePointsForPlayer')[1].getElementsByClassName('step1')[0].classList.toggle('newStep1');
          document.getElementsByClassName('gamePointsForPlayer')[1].getElementsByClassName('step1')[1].classList.toggle('newStep1');
          document.getElementsByClassName('gamePointsForPlayer')[1].getElementsByClassName('step1')[2].classList.toggle('newStep1');
    
          document.getElementsByClassName('gamePointsForPlayer')[1].getElementsByClassName('step2')[0].classList.toggle('newStep2');
          document.getElementsByClassName('gamePointsForPlayer')[1].getElementsByClassName('step2')[1].classList.toggle('newStep2');
          document.getElementsByClassName('gamePointsForPlayer')[1].getElementsByClassName('step2')[2].classList.toggle('newStep2');

          this.firstSubmit2 = false;
          this.secondSubmit2 = true;
        }

        this.pointsService.outputPointsForAnotherPlayer();
        this.pointsService.result();
        this.changeDetectorRef.detectChanges();
    }
  
  }

}
