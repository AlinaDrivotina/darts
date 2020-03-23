import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root'
})

export class PlayerService {
    public arr: any[] = [];
    public nick: string;
    public ind: number = 0;
    public newArr: any[] = [];
    public counter: number = 1;

    public addNewPlayer(a: any) {
        this.arr.push(a);
    }

    public getNewPlayer(filterValue: any) {
        if(filterValue === null || filterValue === '' || filterValue === ' ') {
            return this.arr;
        } else {
            return this.arr.filter(el => el.nickname === filterValue);
        }
    }

    public searching(filterValue) {
        this.arr.filter(el => el.nickname === filterValue) 
    }
    
    public selectedPlayer(i: number) {
        this.ind = i;
        this.nick = this.arr[i].nickname;
        if (this.counter === 1) {
            this.newArr.push(this.arr[i]);
            this.counter++;
            return this.newArr;
        }
        this.newArr.push(this.arr[i]);
        if (this.counter != 1) {
            this.newArr[this.newArr.length - 2] = this.arr[i];
            this.newArr.splice(this.newArr.length - 1, 1);
        }
        if (this.newArr.length > 0 && this.newArr.length !== 1) {
            if (this.newArr[this.newArr.length - 1].nickname === this.newArr[this.newArr.length - 2].nickname) {
                this.newArr.splice(this.newArr.length - 1, 1);
            }
        }
        return this.newArr;
    }

    public pushingPlayer() {
        return this.newArr;
    }

    public playerNickname() {
        return this.nick;
    }

    public cleanPlayers() {
        this.ind = 0;
        this.nick = null;
        this.newArr = [];
        this.counter = 1;
    }
    
}

