import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})

//нужно использовать интерфейс
export class PlayerService {
  arr: any[] = [];
  nick: string;
  ind: number = 0;
  newArr: any[] = [];

  constructor() { 
    
  }

  addNewPlayer(a: any) {
    this.arr.push(a);
  }

  getNewPlayer() {
    return this.arr;
  }
  
  selectedPlayer(i: number) {
    this.ind = i;
    this.nick = this.arr[i].nickname;
    return this.newArr.push(this.arr[i])
  }

  pushingPlayer() {
    return this.newArr;
  }

  playerNickname() {
    return this.nick;
  }
 
}

