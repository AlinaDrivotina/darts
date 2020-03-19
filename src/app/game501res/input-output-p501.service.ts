import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root'
})
export class InputOutputP501Service {

    public res1 = 501;
    public res2 = 501;
    public res3 = 501;

    public points: any [] = []

    public arr1: any [] = [];
    public arr2: any [] = [];
    public arr3: any [] = [];

    constructor() { }

    public inputPointsForPlayer1(a: any) {
        this.arr1.push(a);
    }

    public inputPointsForPlayer2(a: any) {
        this.arr2.push(a);
    }

    public inputPointsForPlayer3(a: any) {
        this.arr3.push(a);
    }

    public outputPointsForPlayer1() {

        let arrayPoints1 = Object.values(this.arr1[this.arr1.length - 1]);

        let sumArr1 = arrayPoints1
        .map((item: string) => parseInt(item))
        .reduce( (sum: number, current: number) => {
        return (sum + current);
        });

        this.res1 -= sumArr1;

        if (this.res1 < 0 || this.res1 === 1) {
        this.res1 += sumArr1;
        }

    }

    public outputPointsForPlayer2() {

        let arrayPoints2 = Object.values(this.arr2[this.arr2.length - 1]);

        let sumArr2 = arrayPoints2
        .map((item: string) => parseInt(item))
        .reduce( (sum: number, current: number) => {
        return (sum + current);
        });

        this.res2 -= sumArr2;

        if (this.res2 < 0 || this.res2 === 1) {
        this.res2 += sumArr2;
        }

    }

    public outputPointsForPlayer3() {

        let arrayPoints3 = Object.values(this.arr3[this.arr3.length - 1]);

        let sumArr3 = arrayPoints3
        .map((item: string) => parseInt(item))
        .reduce( (sum: number, current: number) => {
        return (sum + current);
        });

        this.res3 -= sumArr3;

        if (this.res3 < 0 || this.res3 === 1) {
        this.res3 += sumArr3;
        }

    }

    public result() {

        let array: any [] = [];

        array.push(String(this.res1), String(this.res2), String(this.res3));

        this.points.unshift(array);

    }

    public final() {
        return this.points;
    }

    public cleanAll() {
        this.res1 = 501;
        this.res2 = 501;
        this.res2 = 501;
        this.points = [];
        this.arr1 = [];
        this.arr2 = [];
        this.arr3 = [];
    }

}
