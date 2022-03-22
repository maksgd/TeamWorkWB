import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appTextModificator]'
})
export class TextModificatorDirective {

  constructor(private el:ElementRef) {}

  textInit: string = ''


  @HostListener('mouseenter') onMouseEnter() {
    this.textInit = this.el.nativeElement.innerHTML
    this.textmodificatorColor('#18cf07', this.textInit + '. Happy Бездей!');
  }

  @HostListener('mouseleave') onMouseLeave() {
    this.textmodificatorColor('', this.textInit);
  }

  private textmodificatorColor(color: string, text: string) {
    this.el.nativeElement.style.backgroundColor = color;
    this.el.nativeElement.innerHTML = text;
  }

}
