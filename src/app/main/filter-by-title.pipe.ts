import { Pipe, PipeTransform } from '@angular/core';
import { Video } from 'src/shared/services/interface.service';

@Pipe({
  name: 'filterByTitle'
})
export class FilterByTitlePipe implements PipeTransform {
  transform(videos: Video[], searchText: string): Video[] {
    if (!videos || !searchText) {
      return videos;
    }

    searchText = searchText.toLowerCase();

    return videos.filter(video =>
      video.title.toLowerCase().includes(searchText)
    );
  }
}
