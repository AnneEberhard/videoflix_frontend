import { Injectable } from '@angular/core';
import { HttpClient, HttpEventType, HttpProgressEvent } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable, catchError, filter, of, take, tap } from 'rxjs';
import { Video, VideoGenre } from 'src/shared/services/interface.service';
import { Router } from '@angular/router';
import { AuthService } from './auth.service';


/**
 * This service handles interaction with backend for content
 * @remarks
 * all direct dealing with backend
 * models Video and VideoGenre declared in interface.service.ts
 */
@Injectable({
  providedIn: 'root'
})
export class BackendService {
  videoUrl = environment.baseUrl + '/videos/';
  videos: Video[] = [];

  constructor(private http: HttpClient, private router: Router, private auth: AuthService) { }

/**
 * Logic around getting content info from the backend
 * using getVideos for request
 * returns either arry of video data (in JSON) or empty array if error occurs
 */
  fetchVideoData(): Observable<Video[]> {
    return this.getVideos().pipe(
      tap((data: Video[]) => {
        this.videos = data;
      }),
      catchError(error => {
        console.error('Error fetching video data:', error);
        return of([]);
      })
    );
  }
    
/**
 * handles getting videos from the backend
 */
  getVideos(): Observable<Video[]> {
    const url = environment.baseUrl + `/videos/`;
    return this.http.get<Video[]>(url);
  }


  /**
 * filters videos according to genre
 * @param {VideoGenre} genreToFilter - respective genre names, model declared in interface
 */
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
