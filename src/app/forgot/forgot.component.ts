import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/shared/services/auth.service';

/**
 * This component is the UI in case the user forgot their password
 * @remarks
 * direct dealings with backend in auth.service
 */

@Component({
  selector: 'app-forgot',
  templateUrl: './forgot.component.html',
  styleUrl: './forgot.component.scss'
})
export class ForgotComponent {
  constructor(private authService: AuthService, private router: Router) { }
  email: string = '';
  errorMessage: string = '';


  /**
 * starts logic for sending user email to backend
 * deals with errors that might occur
 */
  async sendMail() {
    try {
      let resp: any = await this.authService.forgot(this.email);
      this.renderInfo();
    } catch (error: any) {
      if (error.status === 400 && error.error.error === 'Account not activated') {
        this.errorMessage = 'Your account is not yet activated. Please check your emails and click on the activation link we have sent you.';
      } else {
        this.errorMessage = 'Error in sending. Please check your input.';
      }
    }
  }

  /**
  * renders info of success in case the backend responded well
  */
  renderInfo() {
    let div = document.getElementById('infoBox');
    if (div)
      div.innerHTML = 'An Email was sent.';
  }
}