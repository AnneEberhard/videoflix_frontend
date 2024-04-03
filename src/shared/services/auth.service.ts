import { HttpClient } from '@angular/common/http';
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
    try {
      this.registerUserinBackend(userData).pipe(take(1))
        .subscribe(response => console.log(response) );
      
      this.router.navigateByUrl(`{environment.baseUrl}`);
    } catch (e) {
      alert('Registrierung fehlgeschlagen!');
      console.error(e);
    }
  }


  registerUserinBackend(userData: any): Observable<any> {
    const url = environment.baseUrl + '/register/';
    return this.http.post<any>(url, userData);
  }



}
