import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[appResaltado]'
})
export class ResaltadoDirective {

  constructor(
    public el:ElementRef
  ) {
  }

  @Input('appResaltado') color:string;

  @HostListener('mouseenter') mouseEnter(){
    this.el.nativeElement.style.backgroundColor = this.color || "yellow";
  }

  @HostListener('mouseout') mouseOut(){
    this.el.nativeElement.style.backgroundColor = null;
  }

}
