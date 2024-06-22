import { Component, OnInit } from '@angular/core';

/**
 * This component shows the privacy policy
 * @remarks
 * is accessible without login
 */
@Component({
    selector: 'app-privacy',
    templateUrl: './privacy.component.html',
    styleUrl: './privacy.component.scss',
})
export class PrivacyComponent implements OnInit {

    ngOnInit(): void {
        window.scrollTo(0, 0);
    }
}
