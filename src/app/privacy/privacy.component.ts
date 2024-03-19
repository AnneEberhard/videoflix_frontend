import { Component } from '@angular/core';
import { FooterComponent } from "../../shared/components/footer/footer.component";
import { HeaderComponent } from "../../shared/components/header/header.component";

@Component({
    selector: 'app-privacy',
    standalone: true,
    templateUrl: './privacy.component.html',
    styleUrl: './privacy.component.scss',
    imports: [FooterComponent, HeaderComponent]
})
export class PrivacyComponent {

}
