import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class InputOutputPointsService {

  public res1 = 301;
  public res2 = 301;
  public points: any [] = []

  public arr1: any [] = [];
  public arr2: any [] = [];

  constructor() { }

  public inputPointsForPlayer(a: any) {
    this.arr1.push(a);
  }

  public inputPountsForAnotherOlayer(a: any) {
    this.arr2.push(a);
  }

  public outputPointsForPlayer() {

    let arrayPoints1 = Object.values(this.arr1[this.arr1.length - 1]);

    let sumArr1 = arrayPoints1
    .map((item: string) => parseInt(item))
    .reduce( (sum: number, current: number) => {
      return (sum + current);
    });

    this.res1 -= sumArr1;

    if (this.res1 < 0) {
      this.res1 += sumArr1;
    }

  }

  public outputPointsForAnotherPlayer() {

    let arrayPoints2 = Object.values(this.arr2[this.arr2.length - 1]);

    let sumArr2 = arrayPoints2
    .map((item: string) => parseInt(item))
    .reduce( (sum: number, current: number) => {
      return (sum + current);
    });

    this.res2 -= sumArr2;

    if (this.res2 === this.res1) {
      this.res2 += sumArr2;
    } else if (this.res2 < 0) {
      this.res2 += sumArr2;
    }

  }

  public resres1() {
    return String(this.res1);
  }

  public resres2() {
    return String(this.res2);
  }

  public result() {

    let array: any [] = [];

    array.push(String(this.res1), String(this.res2));

    this.points.unshift(array);

  }

  public final() {
    return this.points;
  }

  public cleanAll() {
    this.res1 = 301;
    this.res2 = 301;
    this.points = [];
    this.arr1 = [];
    this.arr2 = [];
  }

}
