import { HttpErrorResponse, HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { Router } from '@angular/router';

/**
 * This service handles the authentication interceptor to ensure user is logged in
 * @remarks
 * checks if there is a token in the sessionStorage
 * if none, redirects to login page
 */
@Injectable({
  providedIn: 'root'
})
export class AuthInterceptor implements HttpInterceptor {

  constructor(private router: Router) { }

  //  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
  //    const token = sessionStorage.getItem('token');
  //
  //    if (token) {
  //      request = request.clone({
  //        setHeaders: {
  //          Authorization: `Bearer ${token}`,
  //        }
  //      });
  //    }
  //
  //    return next.handle(request).pipe(
  //      catchError((error: HttpErrorResponse) => {
  //        if (error.status === 401) {
  //          this.router.navigate(['/login']);
  //        }
  //        throw error;
  //      })
  //    );
  //  }
  //}


  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const token = sessionStorage.getItem('token');

    if (token) {
      request = request.clone({
        setHeaders: {
          Authorization: `Bearer ${token}`,
        }
      });
    }

    return next.handle(request).pipe(
      catchError((error: HttpErrorResponse) => {
        if (error.status === 401) {
          // Wenn Benutzer nicht autorisiert ist, zur Login-Seite umleiten
          this.router.navigate(['/login']);
        } else if (!navigator.onLine) {
          // Netzwerkverbindung ist offline
          console.log('Sie sind offline. Bitte überprüfen Sie Ihre Internetverbindung.');
        } else if (error.status === 0) {
          // Keine Antwort vom Server (kann auf Netzwerkprobleme oder Serverausfall hinweisen)
          console.log('Server ist nicht erreichbar. Leiten auf Login-Seite um.');
          this.router.navigate(['/login']);
        }
        return throwError(() => new Error('Netzwerk- oder Serverfehler'));  // Updated to use throwError correctly
      })
    );
  }
}
