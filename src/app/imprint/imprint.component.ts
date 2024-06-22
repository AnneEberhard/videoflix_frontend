import { Component, OnInit } from '@angular/core';

/**
 * This component shows the imprint
 * @remarks
 * is accessible without login
 */

@Component({
    selector: 'app-imprint',
    templateUrl: './imprint.component.html',
    styleUrl: './imprint.component.scss',
})
export class ImprintComponent implements OnInit {

    ngOnInit(): void {
        window.scrollTo(0, 0);
    }
}
