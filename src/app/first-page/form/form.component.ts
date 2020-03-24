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
    public arrayOfPlayers: any [];

    constructor(
        public formBuilder: FormBuilder,
        public changeDetectorRef: ChangeDetectorRef,
        public playerS: PlayerService,
        private router: Router, 
        ) {
        this.playerForm = this.formBuilder.group({
        nickname: [null, [
            Validators.required,
            Validators.maxLength(20),
            Validators.pattern("^[a-zA-Z]+$"),
            this.nicknameValidator.bind(this)] 
        ],
        email: [null, Validators.email]
        }); 
    }

    ngOnInit(): void {
        this.filter = null;
    }

    public addingNewUser() {
        if (this.playerForm.invalid) { return; }
        this.playerS.addNewPlayer(this.playerForm.value);
        this.router.navigate(['/selection']);
    }


    private nicknameValidator(control: FormControl): ValidationErrors {
        const value = control.value;
        this.arrayOfPlayers = this.playerS.getNewPlayer(this.filter);
        if (this.arrayOfPlayers.length > 0) {
            let check = this.arrayOfPlayers.find((el) => el.nickname === value);
            if (check !== undefined) {
                return { invalidNickname: 'This nickname was reserved by another player. Try to enter another nickname'};
            } 
            return null;
        }
    }

    get nickname() { 
        return this.playerForm.get('nickname'); 
    }

    get email() { 
        return this.playerForm.get('email'); 
    }

}



