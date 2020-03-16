import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { GameService } from 'src/app/player-game-selection/game.service';
import { Router } from '@angular/router';
import { PlayerService } from 'src/app/first-page/player.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { InputOutputP501Service } from '../input-output-p501.service';

@Component({
  selector: 'app-points-inputs',
  templateUrl: './points-inputs.component.html',
  styleUrls: ['./points-inputs.component.scss']
})
export class PointsInputsComponent implements OnInit {

  public pointsForm: FormGroup;

  public firstSubmit1: boolean = true;
  public secondSubmit1: boolean = true;
  public thirdSubmit1: boolean = true;

  public firstSubmit2: boolean = true;
  public secondSubmit2: boolean = true;
  public thirdSubmit2: boolean = true;

  public firstSubmit3: boolean = true;
  public secondSubmit3: boolean = true;
  public thirdSubmit3: boolean = true;

  constructor(public playerS: PlayerService,
    private router: Router,
    private gameS: GameService,
    public changeDetectorRef: ChangeDetectorRef,
    public formBuilder: FormBuilder,
    public pointsS: InputOutputP501Service,
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
  
  public addAnotherPlayer() {
    let game = this.gameS.getGame();
    let length = this.playerS.pushingPlayer().length;
    if (game === '501' && length === 3) {
      return;
    }
    this.router.navigate(['/selection']); 
  }

  public submitPoints(e) {
    if (this.pointsForm.invalid) { return; }

    if (e.target === document.getElementsByClassName('submitPoints_')[0]) {
      this.pointsS.inputPointsForPlayer1(this.pointsForm.value);

      (document.getElementsByClassName('gamePointsForPlayer_')[0].getElementsByClassName('text_')[0] as HTMLInputElement).value = '';
      (document.getElementsByClassName('gamePointsForPlayer_')[0].getElementsByClassName('text_')[1] as HTMLInputElement).value = '';
      (document.getElementsByClassName('gamePointsForPlayer_')[0].getElementsByClassName('text_')[2] as HTMLInputElement).value = '';

      if (this.firstSubmit1 === true) {
        document.getElementsByClassName('gamePointsForPlayer_')[0].getElementsByClassName('step1_')[0].classList.toggle('newStep1_', true);
        document.getElementsByClassName('gamePointsForPlayer_')[0].getElementsByClassName('step1_')[1].classList.toggle('newStep1_', true);
        document.getElementsByClassName('gamePointsForPlayer_')[0].getElementsByClassName('step1_')[2].classList.toggle('newStep1_', true);
  
        document.getElementsByClassName('gamePointsForPlayer_')[0].getElementsByClassName('step2_')[0].classList.toggle('newStep2_', true);
        document.getElementsByClassName('gamePointsForPlayer_')[0].getElementsByClassName('step2_')[1].classList.toggle('newStep2_', true);
        document.getElementsByClassName('gamePointsForPlayer_')[0].getElementsByClassName('step2_')[2].classList.toggle('newStep2_', true);

        this.firstSubmit1 = false;
        if (this.secondSubmit1 === false) {
          this.secondSubmit1 = true;
        }
      } else if (this.secondSubmit1 === true) {
        document.getElementsByClassName('gamePointsForPlayer_')[0].getElementsByClassName('step2_')[0].classList.toggle('newStep2_', false);
        document.getElementsByClassName('gamePointsForPlayer_')[0].getElementsByClassName('step2_')[1].classList.toggle('newStep2_', false);
        document.getElementsByClassName('gamePointsForPlayer_')[0].getElementsByClassName('step2_')[2].classList.toggle('newStep2_', false)

        document.getElementsByClassName('gamePointsForPlayer_')[0].getElementsByClassName('step3_')[0].classList.toggle('newStep3_', true);
        document.getElementsByClassName('gamePointsForPlayer_')[0].getElementsByClassName('step3_')[1].classList.toggle('newStep3_', true);
        document.getElementsByClassName('gamePointsForPlayer_')[0].getElementsByClassName('step3_')[2].classList.toggle('newStep3_', true);

        this.secondSubmit1 = false;
        if (this.thirdSubmit1 === false) {
          this.thirdSubmit1 = true;
        }
      } else if (this.thirdSubmit1 === true) {
        document.getElementsByClassName('gamePointsForPlayer_')[0].getElementsByClassName('step3_')[0].classList.toggle('newStep3_', false);
        document.getElementsByClassName('gamePointsForPlayer_')[0].getElementsByClassName('step3_')[1].classList.toggle('newStep3_', false);
        document.getElementsByClassName('gamePointsForPlayer_')[0].getElementsByClassName('step3_')[2].classList.toggle('newStep3_', false);

        document.getElementsByClassName('gamePointsForPlayer_')[0].getElementsByClassName('step1_')[0].classList.toggle('newStep1_', false);
        document.getElementsByClassName('gamePointsForPlayer_')[0].getElementsByClassName('step1_')[1].classList.toggle('newStep1_', false);
        document.getElementsByClassName('gamePointsForPlayer_')[0].getElementsByClassName('step1_')[2].classList.toggle('newStep1_', false);

        this.thirdSubmit1 = false;
        if (this.firstSubmit1 === false) {
          this.firstSubmit1 = true;
        }
      }

      this.pointsS.outputPointsForPlayer1();
    } else if ( e.target === document.getElementsByClassName('submitPoints_')[1]) {
      this.pointsS.inputPointsForPlayer2(this.pointsForm.value);

      (document.getElementsByClassName('gamePointsForPlayer_')[1].getElementsByClassName('text_')[0] as HTMLInputElement).value = '';
      (document.getElementsByClassName('gamePointsForPlayer_')[1].getElementsByClassName('text_')[1] as HTMLInputElement).value = '';
      (document.getElementsByClassName('gamePointsForPlayer_')[1].getElementsByClassName('text_')[2] as HTMLInputElement).value = '';

      if (this.firstSubmit2 === true) {
        document.getElementsByClassName('gamePointsForPlayer_')[1].getElementsByClassName('step1_')[0].classList.toggle('newStep1_', true);
        document.getElementsByClassName('gamePointsForPlayer_')[1].getElementsByClassName('step1_')[1].classList.toggle('newStep1_', true);
        document.getElementsByClassName('gamePointsForPlayer_')[1].getElementsByClassName('step1_')[2].classList.toggle('newStep1_', true);
  
        document.getElementsByClassName('gamePointsForPlayer_')[1].getElementsByClassName('step2_')[0].classList.toggle('newStep2_', true);
        document.getElementsByClassName('gamePointsForPlayer_')[1].getElementsByClassName('step2_')[1].classList.toggle('newStep2_', true);
        document.getElementsByClassName('gamePointsForPlayer_')[1].getElementsByClassName('step2_')[2].classList.toggle('newStep2_', true);
  
        this.firstSubmit2 = false;
        if (this.secondSubmit2 === false) {
          this.secondSubmit2 = true;
        }
      } else if (this.secondSubmit2 === true) {
        document.getElementsByClassName('gamePointsForPlayer_')[1].getElementsByClassName('step2_')[0].classList.toggle('newStep2_', false);
        document.getElementsByClassName('gamePointsForPlayer_')[1].getElementsByClassName('step2_')[1].classList.toggle('newStep2_', false);
        document.getElementsByClassName('gamePointsForPlayer_')[1].getElementsByClassName('step2_')[2].classList.toggle('newStep2_', false)

        document.getElementsByClassName('gamePointsForPlayer_')[1].getElementsByClassName('step3_')[0].classList.toggle('newStep3_', true);
        document.getElementsByClassName('gamePointsForPlayer_')[1].getElementsByClassName('step3_')[1].classList.toggle('newStep3_', true);
        document.getElementsByClassName('gamePointsForPlayer_')[1].getElementsByClassName('step3_')[2].classList.toggle('newStep3_', true);
  
        this.secondSubmit2 = false;
        if (this.thirdSubmit2 === false) {
          this.thirdSubmit2 = true;
        }
        } else if (this.thirdSubmit2 === true) {
          document.getElementsByClassName('gamePointsForPlayer_')[1].getElementsByClassName('step3_')[0].classList.toggle('newStep3_', false);
          document.getElementsByClassName('gamePointsForPlayer_')[1].getElementsByClassName('step3_')[1].classList.toggle('newStep3_', false);
          document.getElementsByClassName('gamePointsForPlayer_')[1].getElementsByClassName('step3_')[2].classList.toggle('newStep3_', false);
  
          document.getElementsByClassName('gamePointsForPlayer_')[1].getElementsByClassName('step1_')[0].classList.toggle('newStep1_', false);
          document.getElementsByClassName('gamePointsForPlayer_')[1].getElementsByClassName('step1_')[1].classList.toggle('newStep1_', false);
          document.getElementsByClassName('gamePointsForPlayer_')[1].getElementsByClassName('step1_')[2].classList.toggle('newStep1_', false);
  
          this.thirdSubmit2 = false;
          if (this.firstSubmit2 === false) {
            this.firstSubmit2 = true;
          }
        }

      this.pointsS.outputPointsForPlayer2();
    } else if (e.target === document.getElementsByClassName('submitPoints_')[2]) {
      this.pointsS.inputPointsForPlayer3(this.pointsForm.value);

      (document.getElementsByClassName('gamePointsForPlayer_')[2].getElementsByClassName('text_')[0] as HTMLInputElement).value = '';
      (document.getElementsByClassName('gamePointsForPlayer_')[2].getElementsByClassName('text_')[1] as HTMLInputElement).value = '';
      (document.getElementsByClassName('gamePointsForPlayer_')[2].getElementsByClassName('text_')[2] as HTMLInputElement).value = '';

      if (this.firstSubmit3 === true) {
        document.getElementsByClassName('gamePointsForPlayer_')[2].getElementsByClassName('step1_')[0].classList.toggle('newStep1_', true);
        document.getElementsByClassName('gamePointsForPlayer_')[2].getElementsByClassName('step1_')[1].classList.toggle('newStep1_', true);
        document.getElementsByClassName('gamePointsForPlayer_')[2].getElementsByClassName('step1_')[2].classList.toggle('newStep1_', true);
  
        document.getElementsByClassName('gamePointsForPlayer_')[2].getElementsByClassName('step2_')[0].classList.toggle('newStep2_', true);
        document.getElementsByClassName('gamePointsForPlayer_')[2].getElementsByClassName('step2_')[1].classList.toggle('newStep2_', true);
        document.getElementsByClassName('gamePointsForPlayer_')[2].getElementsByClassName('step2_')[2].classList.toggle('newStep2_', true);
  
        this.firstSubmit3 = false;
        if (this.secondSubmit3 === false) {
          this.secondSubmit3 = true;
        }
      } else if (this.secondSubmit3 === true) {
        document.getElementsByClassName('gamePointsForPlayer_')[2].getElementsByClassName('step2_')[0].classList.toggle('newStep2_', false);
        document.getElementsByClassName('gamePointsForPlayer_')[2].getElementsByClassName('step2_')[1].classList.toggle('newStep2_', false);
        document.getElementsByClassName('gamePointsForPlayer_')[2].getElementsByClassName('step2_')[2].classList.toggle('newStep2_', false)

        document.getElementsByClassName('gamePointsForPlayer_')[2].getElementsByClassName('step3_')[0].classList.toggle('newStep3_', true);
        document.getElementsByClassName('gamePointsForPlayer_')[2].getElementsByClassName('step3_')[1].classList.toggle('newStep3_', true);
        document.getElementsByClassName('gamePointsForPlayer_')[2].getElementsByClassName('step3_')[2].classList.toggle('newStep3_', true);
  
        this.secondSubmit3 = false;
        if (this.thirdSubmit3 === false) {
          this.thirdSubmit3 = true;
        }
        } else if (this.thirdSubmit3 === true) {
          document.getElementsByClassName('gamePointsForPlayer_')[2].getElementsByClassName('step3_')[0].classList.toggle('newStep3_', false);
          document.getElementsByClassName('gamePointsForPlayer_')[2].getElementsByClassName('step3_')[1].classList.toggle('newStep3_', false);
          document.getElementsByClassName('gamePointsForPlayer_')[2].getElementsByClassName('step3_')[2].classList.toggle('newStep3_', false);
  
          document.getElementsByClassName('gamePointsForPlayer_')[2].getElementsByClassName('step1_')[0].classList.toggle('newStep1_', false);
          document.getElementsByClassName('gamePointsForPlayer_')[2].getElementsByClassName('step1_')[1].classList.toggle('newStep1_', false);
          document.getElementsByClassName('gamePointsForPlayer_')[2].getElementsByClassName('step1_')[2].classList.toggle('newStep1_', false);
  
          this.thirdSubmit3 = false;
          if (this.firstSubmit3 === false) {
            this.firstSubmit3 = true;
          }
        }

      this.pointsS.outputPointsForPlayer3();
      this.pointsS.result();
      this.changeDetectorRef.detectChanges();
    }
}
}
