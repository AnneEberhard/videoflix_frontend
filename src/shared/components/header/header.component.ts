import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/shared/services/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {

  //@Input() isLoggedIn: boolean = false;

  constructor(public authService: AuthService, private router: Router) { }


  async logout() {
    const authToken = sessionStorage.getItem('token');
    if (authToken) {
      try {
        await this.authService.logout(authToken);
        this.router.navigate(['/login']);
        sessionStorage.removeItem('token');
      } catch (error: any) {
        console.log('Error at logout:', error);
      }
    }
  }

}