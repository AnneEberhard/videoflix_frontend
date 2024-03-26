import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) { }

  //public loginWithUsernameAndPassword(username:string, password:string){
  //  const url = environment.baseUrl + '/login/';
  //  const body = {
  //    "username": username,
  //    "password": password
  //  };
  //  return lastValueFrom(this.http.post(url, body));
  //}

  registerUser2(userData: any): Observable<any> {
    console.log(userData);
    const url = environment.baseUrl + '/register/';
    console.log(url);
    debugger;
    return this.http.post<any>(url, userData);
  }

  async registerUser(userData: any): Promise<any> {
    const url = `${environment.baseUrl}/register/`;
    try {
      const response = await fetch(url, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(userData)
      });
  
      if (!response.ok) {
        const errorText = await response.text();
        console.error('Fehler bei der Serveranfrage:', errorText);
        throw new Error(errorText);
      }
  
      const data = await response.json();
      console.log('Erfolgreich registriert:', data);
      return data;
    } catch (error) {
      console.error('Fehler beim Senden der Anfrage:');
      throw error;
    }
  }


  fetchData(): Observable<any> {
    return this.http.get<any>('https://api.example.com/data');
  }

  postData(data: any): Observable<any> {
    return this.http.post<any>('https://api.example.com/data', data);
  }
}
