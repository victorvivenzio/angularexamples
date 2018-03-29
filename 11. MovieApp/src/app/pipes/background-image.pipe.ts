import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'backgroundImage'
})
export class BackgroundImagePipe implements PipeTransform {

  transform(value: any): any {
    const url = 'https://image.tmdb.org/t/p/w500';

    if (value.backdrop_path) {
      return `${ url }/${ value.backdrop_path }`;
    } else {
      return `${ url }/${ value.poster_path }`;
    }
  }

}
