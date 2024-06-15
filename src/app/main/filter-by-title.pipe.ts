import { Pipe, PipeTransform } from '@angular/core';
import { Video } from 'src/shared/services/interface.service';


/**
 * This pipe is only for filtering the videos bei genres
 * @remarks
 * is not accessible without login
 * models are defined in interface.service.ts
 */
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
