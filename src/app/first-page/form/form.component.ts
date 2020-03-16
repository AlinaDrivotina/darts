import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { FormGroup, Validators, FormBuilder} from '@angular/forms';
import { PlayerService } from '../player.service';
import { Router } from '@angular/router';





@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})

export class FormComponent implements OnInit {

  public playerForm: FormGroup;

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
        Validators.pattern("^[a-zA-Z]+$")
        ] 
      ],
      email: [null, Validators.email]
    });
  }

  public addingNewUser() {
    if (this.playerForm.invalid) { return; }
    this.playerS.addNewPlayer(this.playerForm.value);
    this.router.navigate(['/selection']);
  }

  ngOnInit(): void {

  }

  get nickname() { 
    return this.playerForm.get('nickname'); 
  }

  get email() { 
    return this.playerForm.get('email'); 
  }

  // submit() {
  //   alert(this.playerForm);
  // }

}



