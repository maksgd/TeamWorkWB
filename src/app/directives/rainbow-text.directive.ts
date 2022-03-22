import { Directive, ElementRef, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appRainbowText]'
})
export class RainbowTextDirective {

  constructor(private element: ElementRef, private renderer: Renderer2) {
    this.renderer.addClass(this.element.nativeElement, 'rainbow-animate')
  }
  
  
}
