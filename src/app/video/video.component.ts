import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-video',
  templateUrl: './video.component.html',
  styleUrls: ['./video.component.scss']
})
export class VideoComponent implements OnInit {
  videoUrl: string ='';

  constructor(private route: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    this.videoUrl = history.state.videoUrl;
  }

  goBack(): void {
    this.router.navigate(['/main']);
  }

}
