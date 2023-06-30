import { Directive, ElementRef, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appCustomDirective]'
})
export class CustomDirectiveDirective {

  constructor(ele:ElementRef, render: Renderer2) { 
    render.setStyle(ele.nativeElement, 'color', 'blue');
  }

}
