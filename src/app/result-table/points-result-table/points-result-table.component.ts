import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { PlayerService } from 'src/app/first-page/player.service';
import { InputOutputPointsService } from '../input-output-points.service';

@Component({
  selector: 'app-points-result-table',
  templateUrl: './points-result-table.component.html',
  styleUrls: ['./points-result-table.component.scss']
})
export class PointsResultTableComponent implements OnInit {
  first: string;
  second: string;

  constructor(public playerS : PlayerService,
    public pointsService: InputOutputPointsService,
    private readonly changeDetectorRef: ChangeDetectorRef,
  ) { }

  ngOnInit(): void {

    this.first = this.playerS.pushingPlayer()[0].nickname;

    this.second = this.playerS.pushingPlayer()[this.playerS.pushingPlayer().length - 1].nickname;
  
  }

}
