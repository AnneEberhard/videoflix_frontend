import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { BackendService } from 'src/shared/services/backend.service';


@Component({
    selector: 'app-main',
    templateUrl: './main.component.html',
    styleUrl: './main.component.scss',
})
export class MainComponent {

    constructor(public backend: BackendService, private router: Router) {
      }

 
}
