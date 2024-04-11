import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject, Observable, take } from 'rxjs';
import { environment } from 'src/environments/environment';
import { lastValueFrom } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  loader: boolean = false;
  private isLoggedInSubject = new BehaviorSubject<boolean>(false);
  isLoggedIn$ = this.isLoggedInSubject.asObservable();
  
  constructor(private http: HttpClient, private router: Router) { 
    const token = sessionStorage.getItem('token');
    if (token) {
      this.setLoggedIn(true);
    }else {
      this.setLoggedIn(false);
    }
  
    // window.addEventListener('storage', (event: StorageEvent) => {
    //   if (event.storageArea === sessionStorage && event.key === 'token') {
    //     if (event.newValue) {
    //       this.setLoggedIn(true);
    //     } else {
    //       this.setLoggedIn(false);
    //     }
    //   }
    // });


  }
  

  setLoggedIn(value: boolean) {
    this.isLoggedInSubject.next(value);
  }

  get isLoggedIn() {
    return this.isLoggedInSubject.value;
  }

/**
 * 
 */
  public registerUser(userData: any) {
    this.registerUserinBackend(userData).pipe(take(1))
      .subscribe({
        next: (response) => {
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

/**
 * 
 */
  registerUserinBackend(userData: any): Observable<any> {
    const url = environment.baseUrl + '/register/';
    return this.http.post<any>(url, userData);
  }

/**
 * handles user login in backend
 */
  public login(email: string, password: string) {
    const url = environment.baseUrl + '/login/';
    const body = {
      "email": email,
      "password": password
    };
    return lastValueFrom(this.http.post(url, body));
  }


/**
 * handles user logout in backend
 */
  async logout(authToken: string) {
    const url = environment.baseUrl + `/logout/`;
    await fetch(url, {
      method: "POST",
      headers: {
        "Authorization": `Token ${authToken}`,
      },
    }).catch(error => {
      console.error("Fehler beim Logout:", error);
    });
  }

/**
 * sends email-info to backend in case of forgotten password
 * @param {string} email - user email address
 */
  public forgot(email: string) {
    const url = environment.baseUrl + '/forgot/';
    const body = {
      "email": email
    };
    return lastValueFrom(this.http.post(url, body));
  }

/**
 * sends new password to backend in case of forgotten password
 * @param {string} key - url for backend including query params uid and token
 * @param {string} password - new set password
 */
public reset(key:string, password:string) {
  const url = environment.baseUrl + key;
  console.log(url);
  const body = {
    "password": password
  };
  return lastValueFrom(this.http.post(url, body));
}

}

