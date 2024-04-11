import { Injectable } from '@angular/core';
import { HttpClient, HttpEventType, HttpProgressEvent } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable, filter, take } from 'rxjs';
import { Video, VideoGenre } from 'src/shared/services/interface.service';
import { Router } from '@angular/router';
import { AuthService } from './auth.service';



@Injectable({
  providedIn: 'root'
})
export class BackendService {
  videoUrl = environment.baseUrl + '/videos/';
  videos: Video[] = [];
  uploadProgress: number = 0;
  uploadSuccessful: boolean = false;

  constructor(private http: HttpClient, private router: Router, private auth: AuthService) { }


  fetchVideoData() {
    const url = environment.baseUrl + `/videos/`;
    this.getVideos().pipe(take(1)).subscribe(
      {
        next: (data: Video[]) => {
          this.videos = data;
          console.log(this.videos);
          this.auth.loader = false;
        },
        error: error => {
          this.auth.loader = true;
        }
      } );
    }
    
    getVideos(): Observable<Video[]> {
      const url = environment.baseUrl + `/videos/`;
      return this.http.get<Video[]>(url);
    }
  
    filterVideos(genreToFilter: VideoGenre): Video[] {
      let filteredVideos: Video[];
      if (genreToFilter) {
        filteredVideos = this.videos.filter(video => video.genre === genreToFilter);
      } else {
        filteredVideos = []
      }
      return filteredVideos;
    }
}
