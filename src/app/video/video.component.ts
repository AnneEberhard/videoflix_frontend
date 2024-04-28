import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';


/**
 * This component plays the video
 * @remarks
 * is not accessible without login
 */
@Component({
  selector: 'app-video',
  templateUrl: './video.component.html',
  styleUrls: ['./video.component.scss']
})
export class VideoComponent implements OnInit {
  videoUrl: string = '';
  @ViewChild('myVideo') myVideo!: ElementRef;
  showCloseButton: boolean = false;

  constructor(private route: ActivatedRoute, private router: Router) { }

  /**
   * gets video url from history state of the url
   */
  ngOnInit(): void {
    this.videoUrl = history.state.videoUrl;
  }

  /**
   * returns to video overview page 'main'
   */
  goBack(): void {
    this.router.navigate(['/main']);
  }

  /**
   * toggles close button so it is not shown while video is played
   */
  toggleCloseButton() {
    this.showCloseButton = !this.showCloseButton;
  }


  /**
  * prevents right click on element to disable download
  * @param {MouseEvent} event rightclick
  */
  preventRightClick(event: MouseEvent) {
    event.preventDefault();
  }
}
