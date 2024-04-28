import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/shared/services/auth.service';

/**
 * This component handles the login in the frontend
 * @remarks
 * is accessible without login
 * * dealing with backend is via auth.service
 */
@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrl: './login.component.scss',
})
export class LoginComponent {
    email: string = '';
    password: string = '';
    errorMessage: string = '';

    constructor(private authService: AuthService, private router: Router) {}

/**
* starts login, sets storage token in case of success and renders errors in case of failure
*/
    async login() {
        try {
          let resp:any = await this.authService.login(this.email, this.password);
          sessionStorage.setItem('token', resp['token']);
          this.router.navigate(['/main'])
        } catch (error:any) {
            if (error.status === 400 && error.error.error === 'Account not activated') {
                this.errorMessage = 'Your account is not yet activated. Please check your emails and click on the activation link we have sent you.';
              } else {
                this.errorMessage = 'Error logging in. Please check your login information.';
              }
        }
      }
   
}


