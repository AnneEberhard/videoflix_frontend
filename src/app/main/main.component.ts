import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/shared/services/auth.service';
import { BackendService } from 'src/shared/services/backend.service';
import { Video, VideoGenre } from 'src/shared/services/interface.service';
import { environment } from 'src/environments/environment';
import { SpeedTestService } from 'src/shared/services/speedtest.service';


/**
 * This component shows an overview of the videos
 * @remarks
 * is not accessible without login
 * dealing with backend with regard to content: backend.service.ts
 * dealing with backend with regard to authentication of user: auth.service.ts
 * models are defined in interfeace.service.ts
 */
@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrl: './main.component.scss',
})
export class MainComponent implements OnInit {

  videos: any[] = [];
  genres: VideoGenre[] = ['Dystopia', 'Fantasy', 'Historical', 'Spy', 'Contemporary'];
  selectedGenre: VideoGenre | null = null;
  searchQuery: string = '';
  speed: number = 1;
  selectedVideo: Video | null = null;

  constructor(public authService: AuthService, public backend: BackendService, private router: Router, private speedTestService: SpeedTestService) {
  }

  /**
    * handles logout in the frontend
    * token is removed from sessionStorage
    * dealing with backend via auth.service
    * refers to login page
    * @remarks
    * sessionStorage used instead of localStorage to avoid blocking
  */
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

  /**
   * fetches video Data on initialisation
   * dealing with backend via backend.service
   */
  ngOnInit() {
    this.backend.fetchVideoData().subscribe(
      (data: Video[]) => {
        this.videos = data;
      }
    );
    this.runSpeedTest();
  }

  /**
  * filters videos by genre for html code
  * @param {VideoGenre | null} genre to be filtered
  */
  filterVideosByGenre(genre: VideoGenre | null): Video[] {
    if (!genre) {
      return this.videos;
    }
    return this.videos.filter(video => video.genre === genre);
  }

  /**
    * switches to Video component for playing the video
    * url based on speedtest
    * @param {Video} video Video Data from the backend for this specific video
    */
  playVideo(video: Video): void {
    let videoUrl: string;
    if (this.speed < 3) {
      videoUrl = video.video_file_url.replace('.mp4', '_480p.mp4');
    } else if (this.speed >= 3 && this.speed <= 10) {
      videoUrl = video.video_file_url.replace('.mp4', '_720p.mp4');
    } else {
      videoUrl = video.video_file_url;
    }
    this.router.navigate(['/video'], { state: { videoUrl: videoUrl } });
  }

  /**
  * prevents right click on element to disable download
  * @param {MouseEvent} event rightclick
  */
  preventRightClick(event: MouseEvent) {
    event.preventDefault();
  }

  /**
  * runs speedtest of internet connection to determine wich video should be loaded
  */
  runSpeedTest() {
    const testFileUrl = environment.baseUrl + '/speedtest/';
    const fileSizeInBytes = 1000000;
    this.speedTestService.testDownloadSpeed(testFileUrl, fileSizeInBytes).then(speed => {
      this.speed = speed;
    });
  }

  /**
  * shows overlay with video details
  * @param {Video} video Video Data from the backend for this specific video
  */
  showOverlay(video: Video): void {
    this.selectedVideo = video;
  }

  /**
  * closes overlay
  */
  closeOverlay(): void {
    this.selectedVideo = null;
  }
}
