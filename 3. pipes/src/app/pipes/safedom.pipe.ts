import { Pipe, PipeTransform } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';

@Pipe({
  name: 'safedom'
})
export class SafedomPipe implements PipeTransform {

  constructor(private domSanitatizer:DomSanitizer){}

  transform(value: string, url:string): any {
    return this.domSanitatizer.bypassSecurityTrustResourceUrl(url + value);
  }

}
