import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'password'
})
export class PasswordPipe implements PipeTransform {
  transform(value: any, activar: boolean = true): string {
    return activar ? value =  new Array((value.length + 1)).join("*") : value;
  }
}
