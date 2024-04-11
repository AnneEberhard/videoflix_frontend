import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/shared/services/auth.service';
import { BackendService } from 'src/shared/services/backend.service';



@Component({
    selector: 'app-main',
    templateUrl: './main.component.html',
    styleUrl: './main.component.scss',
})
export class MainComponent implements OnInit {

  videos: any[] = [];

    constructor(public authService: AuthService, public backend: BackendService, private router: Router) {
      }
 
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

      ngOnInit(): void {
        this.backend.fetchVideoData();
      }
    

}
