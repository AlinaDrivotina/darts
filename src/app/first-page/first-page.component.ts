import { Component, OnInit } from '@angular/core';
import { Router, NavigationStart } from '@angular/router';

@Component({
    selector: 'app-first-page',
    templateUrl: './first-page.component.html',
    styleUrls: ['./first-page.component.scss']
})
export class FirstPageComponent implements OnInit {

    constructor() { }

    ngOnInit(): void {
    }

}
