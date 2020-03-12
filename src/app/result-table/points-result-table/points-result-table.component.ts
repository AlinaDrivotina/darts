import { Component, OnInit, ChangeDetectorRef, ChangeDetectionStrategy } from '@angular/core';
import { PlayerService } from 'src/app/first-page/player.service';
import { InputOutputPointsService } from '../input-output-points.service';

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: 'app-points-result-table',
  templateUrl: './points-result-table.component.html',
  styleUrls: ['./points-result-table.component.scss']
})
export class PointsResultTableComponent implements OnInit {

  constructor(public playerS : PlayerService,
    public pointsService: InputOutputPointsService,
    private readonly changeDetectorRef: ChangeDetectorRef,
  ) { }

  ngOnInit(): void {
  }

  first = this.playerS.pushingPlayer()[0].nickname;

  second = this.playerS.pushingPlayer()[this.playerS.pushingPlayer().length - 1].nickname;

  // this.changeDetectorRef.detectChanges();

}
