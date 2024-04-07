import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable, take } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  loader: boolean = false;
  constructor(private http: HttpClient, private router: Router) { }


  public registerUser(userData: any) {
    this.registerUserinBackend(userData).pipe(take(1))
      .subscribe({
        next: (response) => {
          console.log(response);
          this.router.navigateByUrl(`/confirmation?data=${JSON.stringify(response)}`);
        },
        error: (err) => {
          if (err instanceof HttpErrorResponse) {
            this.router.navigateByUrl(`/confirmation?data=${JSON.stringify(err.error)}`);
          } else {
            console.error('An error occurred:', err);
            alert('An error occurred!');
          }
        }
      });
  }
  


  registerUserinBackend(userData: any): Observable<any> {
    const url = environment.baseUrl + '/register/';
    return this.http.post<any>(url, userData);
  }



}
