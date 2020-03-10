import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class InputOutputPointsService {

  points: number;

  arr1: any [] = [];
  arr2: any [] = [];

  constructor() { }

  inputPointsForFirstPlayer(a: any) {
    this.arr1.push(a);
  }

  inputPointsForSecondPlayer(a: any) {
    this.arr2.push(a);
  }

  outputPoints() {
    let points = [];

    let sumArr1 = this.arr1.reduce(function(sum, current) {
      return sum + current;
    });
    let res1 = 301 - sumArr1;

    let sumArr2 = this.arr1.reduce(function(sum, current) {
      return sum + current;
    });
    let res2 = 301 - sumArr2;

    points.push(res1);
    points.push(res2);

    return points;

  }

}
