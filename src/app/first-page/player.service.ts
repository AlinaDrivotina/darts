import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root'
})

export class PlayerService {
    arr: any[] = [];
    nick: string;
    ind: number = 0;
    newArr: any[] = [];

    public addNewPlayer(a: any) {
        this.arr.push(a);
    }

    public getNewPlayer(filterValue: string) {
        this.arr.filter(el => {
          if (el.nickname === filterValue) {
            return this.arr.indexOf(el);
          }
        });
        if (filterValue === undefined || filterValue === '') {
            return this.arr;
        }
    }
    
    public selectedPlayer(i: number) {
        this.ind = i;
        this.nick = this.arr[i].nickname;
        return this.newArr.push(this.arr[i])
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
    }
    
}

