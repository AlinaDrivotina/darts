import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { FormGroup, Validators, FormBuilder, NgForm } from '@angular/forms';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})

export class FormComponent implements OnInit {

  playerForm: FormGroup;

  constructor(
    public formBuilder: FormBuilder,
    public changeDetectorRef: ChangeDetectorRef
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
  
  nickName;
  mail;

  addingNewUser() {
    this.nickName = (<HTMLInputElement>document.getElementById('nickname')).value;
    this.mail = (<HTMLInputElement>document.getElementById('email')).value;
    alert(`nickname: ${this.nickName} \nemail: ${this.mail}`);
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

