import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { FormGroup, Validators, FormBuilder} from '@angular/forms';
import { PlayerService } from '../player.service';


@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})

export class FormComponent implements OnInit {

  playerForm: FormGroup;

  constructor(
    public formBuilder: FormBuilder,
    public changeDetectorRef: ChangeDetectorRef,
    playerS: PlayerService
    ) {
    this.playerForm = this.formBuilder.group({
      nickname: ["Player", [
        Validators.required,
        Validators.maxLength(20),
        Validators.pattern("^[a-zA-Z]+$")
        ] 
      ],
      email: [null, Validators.email]
    });

  }

  addingNewUser() {
   // обработчик кнопки, который переотрисовывает страницу
  }

  ngOnInit(): void {
  
  }

  get nickname() { 
    return this.playerForm.get('nickname'); 
  }

  get email() { 
    return this.playerForm.get('email'); 
  }

  submit() {
    console.log(this.playerForm);
  }

}


