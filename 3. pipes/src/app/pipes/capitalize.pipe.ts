import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'capitalize'
})
export class CapitalizePipe implements PipeTransform {
  transform(value: string, todas:boolean = true): string {
    value = value.toLowerCase();
    let capitalizeValue:string;
    let words:string[] = value.split(" ");

    if( todas ){
      for(let i in words){
        words[i] = words[i][0].toUpperCase() + words[i].substr(1);
      }
    } else {
      words[0] = words[0][0].toUpperCase() + words[0].substr(1);
    }

    return capitalizeValue = words.join(" ") ;
  }
}
