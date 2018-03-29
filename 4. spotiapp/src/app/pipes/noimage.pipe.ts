import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'noimage'
})
export class NoimagePipe implements PipeTransform {

  transform(value: any[]): any {
    let noimage:string = "assets/img/noimage.png";
    if(!value){
      return noimage;
    }
    return value.length > 0 ? value[1].url: noimage  ;
  }

}
