import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { PlayerService } from 'src/app/first-page/player.service';
import { InputOutputP501Service } from '../input-output-p501.service';

@Component({
  selector: 'app-points-res501-table',
  templateUrl: './points-res501-table.component.html',
  styleUrls: ['./points-res501-table.component.scss']
})
export class PointsRes501TableComponent implements OnInit {

  public first: string;
  public second: string;
  public third: string;

  constructor(public playerS : PlayerService,
    private readonly changeDetectorRef: ChangeDetectorRef,
    public pointsS: InputOutputP501Service
  ) { }

  ngOnInit(): void {
    this.first = this.playerS.pushingPlayer()[0].nickname;

    this.second = this.playerS.pushingPlayer()[this.playerS.pushingPlayer().length - 1].nickname;

    if (this.playerS.pushingPlayer().length === 3) {
      this.second = this.playerS.pushingPlayer()[1].nickname;
      this.third = this.playerS.pushingPlayer()[this.playerS.pushingPlayer().length - 1].nickname;
    }
  }

}
