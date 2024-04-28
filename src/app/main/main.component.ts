import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/shared/services/auth.service';
import { BackendService } from 'src/shared/services/backend.service';
import { Video, VideoGenre } from 'src/shared/services/interface.service';



@Component({
    selector: 'app-main',
    templateUrl: './main.component.html',
    styleUrl: './main.component.scss',
})
export class MainComponent implements OnInit {

  videos: any[] = [];
  genres: VideoGenre[] = ['Dystopia', 'Fantasy', 'Historical', 'Spy', 'Contemporary'];
  selectedGenre: VideoGenre | null = null;
  searchQuery: string = ''; // Definiere searchQuery hier

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

      ngOnInit() {
        this.backend.fetchVideoData().subscribe(
          (data: Video[]) => {
            this.videos = data;
          }
        );
      }
    
      filterVideosByGenre(genre: VideoGenre | null): Video[] {
        if (!genre) {
          return this.videos; 
        }
        return this.videos.filter(video => video.genre === genre);
      }


      playVideo(video: Video): void {
        this.router.navigate(['/video'], { state: { videoUrl: video.video_file_url } });
        console.log(video.video_file_url);
      }
}
