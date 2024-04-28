import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-video',
  templateUrl: './video.component.html',
  styleUrls: ['./video.component.scss']
})
export class VideoComponent implements OnInit {
  videoUrl: string ='';
  @ViewChild('myVideo') myVideo!: ElementRef;
  showCloseButton: boolean = false; // Variable zum Anzeigen/Ausblenden des Buttons

  constructor(private route: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    this.videoUrl = history.state.videoUrl;
  }

  goBack(): void {
    this.router.navigate(['/main']);
  }

  toggleCloseButton() {
    this.showCloseButton = !this.showCloseButton; // Toggle der showCloseButton Variable
  }

  preventRightClick(event: MouseEvent) {
    event.preventDefault();
  }
}
