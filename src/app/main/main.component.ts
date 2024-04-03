import { Component } from '@angular/core';
import { async } from 'rxjs';
import { Router } from '@angular/router';
import { Video, VideoGenre } from 'src/shared/services/interface.service';
import { BackendService } from 'src/shared/services/backend.service';


@Component({
    selector: 'app-main',
    templateUrl: './main.component.html',
    styleUrl: './main.component.scss',
})
export class MainComponent {

    constructor(public backend: BackendService, private router: Router) {
      }

    genres: VideoGenre[] = ["documentation", "blockbuster", "comedy", "action", "drama", "sitcom"];
    videos: Video[] = [];   
}
