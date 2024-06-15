import { Component, OnInit } from '@angular/core';
import { fromEvent, merge, Observable } from 'rxjs';
import { filter, map, startWith } from 'rxjs/operators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'videoflix';
  //isLoggedIn: boolean = false;

  //ngOnInit() {
  //  const storageEvent$ = fromEvent(window, 'storage').pipe(
  //    map((event: Event) => {
  //      if (event instanceof StorageEvent) {
  //        return event.key === 'token';
  //      }
  //      return false;
  //    })
  //  );

  //  const sessionToken = sessionStorage.getItem('token');
  //  this.isLoggedIn = !!sessionToken;

  //  merge(storageEvent$, new Observable<boolean>(observer => {
  //    observer.next(this.isLoggedIn);
  //  })).pipe(
  //    startWith(this.isLoggedIn)
  //  ).subscribe(isLoggedIn => {
  //    this.isLoggedIn = isLoggedIn;
  //  });
  //  console.log(this.isLoggedIn);
  //}
  //<app-header [isLoggedIn]="isLoggedIn"></app-header>
}
