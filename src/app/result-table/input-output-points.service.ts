import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class InputOutputPointsService {

  res1 = 301;
  res2 = 301;
  points: any [] = []

  arr1: any [] = [];
  arr2: any [] = [];

  constructor() { }

  inputPointsForPlayer(a: any) {
    this.arr1.push(a);
  }

  inputPountsForAnotherOlayer(a: any) {
    this.arr2.push(a);
  }

  outputPointsForPlayer() {

    let arrayPoints1 = Object.values(this.arr1[this.arr1.length - 1]);

    let sumArr1 = arrayPoints1
    .map((item: string) => parseInt(item))
    .reduce( (sum: number, current: number) => {
      return (sum + current);
    });

    this.res1 -= sumArr1;

  }

  outputPointsForAnotherPlayer() {

    let arrayPoints2 = Object.values(this.arr2[this.arr2.length - 1]);

    let sumArr2 = arrayPoints2
    .map((item: string) => parseInt(item))
    .reduce( (sum: number, current: number) => {
      return (sum + current);
    });

    this.res2 -= sumArr2;

    if (this.res2 === this.res1) {
      this.res2 += sumArr2;
    }

  }

  array: any [] = [];
  result() {

    this.array.push(this.res1, this.res2);

    this.points.push(this.array);
    
  }

  final() {
    return this.points;
  }

  // outputPoints() {

  //   let arrayPoints1 = Object.values(this.arr1[this.arr1.length - 1]);
  //   let arrayPoints2 = Object.values(this.arr2[this.arr2.length - 1]);
  
  //   let sumArr1 = arrayPoints1
  //   .map((item: string) => parseInt(item))
  //   .reduce( (sum: number, current: number) => {
  //     return (sum + current);
  //   });

  //   this.res1 -= sumArr1;

  //   let sumArr2 = arrayPoints2
  //   .map((item: string) => parseInt(item))
  //   .reduce( (sum: number, current: number) => {
  //     return (sum + current);
  //   });

  //   if(sumArr2 === sumArr1) {
  //     sumArr2 = 0;
  //   }

  //   this.res2 -= sumArr2;

  //   let array: any [] = [];
  //   array.push(this.res1, this.res2);

  //   return this.points.push(array);
  // }

}
