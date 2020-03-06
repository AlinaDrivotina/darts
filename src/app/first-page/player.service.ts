import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})

//нужно использовать интерфейс
export class PlayerService {
  arr: any[] = [];
  nick: string;
  constructor() { 
    
  }

  addNewPlayer(a: any) {
    this.arr.push(a);
  }

  getNewPlayer() {
    return this.arr;
  }
  
  selectedPlayer(i: number) {
    this.nick = this.arr[i].nickname;
    return this.nick;
  }

  pushingPlayer() {
    return this.nick;
  }
  
}

