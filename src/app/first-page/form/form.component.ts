import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { FormGroup, Validators, FormBuilder, FormControl, ValidationErrors} from '@angular/forms';
import { PlayerService } from '../player.service';
import { Router } from '@angular/router';

@Component({
    selector: 'app-form',
    templateUrl: './form.component.html',
    styleUrls: ['./form.component.scss']
})

export class FormComponent implements OnInit {

    public playerForm: FormGroup;
    public filter: any;

    constructor(
        public formBuilder: FormBuilder,
        public changeDetectorRef: ChangeDetectorRef,
        private playerS: PlayerService,
        private router: Router, 
        ) {
        this.playerForm = this.formBuilder.group({
        nickname: ["Player", [
            Validators.required,
            Validators.maxLength(20),
            Validators.pattern("^[a-zA-Z]+$")] 
        ],
        email: [null, Validators.email]
        });
    }

    ngOnInit(): void {
        this.filter = null;
    }

    public addingNewUser() {
        if (this.playerForm.invalid) { return; }
        let arr = this.playerS.getNewPlayer(this.filter);
        if (arr.length > 0 && this.playerForm.value.nickname === arr[arr.length - 1].nickname) {
            alert('This nickname was reserved by another player');
            return;
        }
        this.playerS.addNewPlayer(this.playerForm.value);
        this.router.navigate(['/selection']);
    }

    // private nicknameValidator(control: FormControl): ValidationErrors {
    //     const value = control.value;
    //     if (this.playerS.getNewPlayer().length > 0) {
    //         let players = this.playerS.getNewPlayer();
    //         if (players[players.length - 1].nickname === value) {
    //             players.splice(players.length - 1, 1);
    //             return { invalidNickname: 'This nickname was reserved by another player'};
    //         }       
    //         return null;
    //     }
    // }

    get nickname() { 
        return this.playerForm.get('nickname'); 
    }

    get email() { 
        return this.playerForm.get('email'); 
    }

}



