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
      this.pointsService.outputPointsForPlayer();
    } else if ( e.target === document.getElementsByClassName('submitPoints')[1] ) {
      this.pointsService.inputPountsForAnotherOlayer(this.pointsForm.value);
      (<HTMLInputElement>document.getElementsByClassName('gamePointsForPlayer')[1].getElementsByClassName('text')[0]).value = '';
      (<HTMLInputElement>document.getElementsByClassName('gamePointsForPlayer')[1].getElementsByClassName('text')[1]).value = '';
      (<HTMLInputElement>document.getElementsByClassName('gamePointsForPlayer')[1].getElementsByClassName('text')[2]).value = '';
      this.pointsService.outputPointsForAnotherPlayer();
      this.pointsService.result();
      this.changeDetectorRef.detectChanges();
    }

  }

}
