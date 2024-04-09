import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/shared/services/auth.service';

@Component({
  selector: 'app-forgot',
  templateUrl: './forgot.component.html',
  styleUrl: './forgot.component.scss'
})
export class ForgotComponent {
  constructor(private authService: AuthService, private router: Router) {}
  email: string = '';
  errorMessage: string = '';

  async sendMail() {

    try {
      let resp:any = await this.authService.forgot(this.email);
      console.log(resp);
      this.renderInfo();
    } catch (error:any) {
        if (error.status === 400 && error.error.error === 'Account not activated') {
            this.errorMessage = 'Your account is not yet activated. Please check your emails and click on the activation link we have sent you.';
          } else {
            this.errorMessage = 'Error logging in. Please check your login information.';
          }

    }
}

renderInfo() {
  let div = document.getElementById('infoBox');
  if(div)
  div.innerHTML = 'An Email was sent';
}
}