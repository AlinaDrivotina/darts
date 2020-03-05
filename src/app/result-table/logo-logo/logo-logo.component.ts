import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-logo-logo',
  templateUrl: './logo-logo.component.html',
  styleUrls: ['./logo-logo.component.scss']
})
export class LogoLogoComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  startNewGame() {
    this.router.navigate(['/selection']);
  }

}
