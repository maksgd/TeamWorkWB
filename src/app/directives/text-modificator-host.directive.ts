import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appTextModificatorHost]',
  host: {
    '(mouseenter)' : 'onMouseEnter()',
    '(mouseleave)' : 'onMouseLeave()'
  }
})
export class TextModificatorHostDirective {

  constructor(private el:ElementRef) {}

  textInit: string = ''


  onMouseEnter() {
    this.textInit = this.el.nativeElement.innerHTML
    this.textmodificatorColor('#18cf07', this.textInit + '. Happy Бездей!');
  }

  onMouseLeave() {
    this.textmodificatorColor('', this.textInit);
  }

  private textmodificatorColor(color: string, text: string) {
    this.el.nativeElement.style.backgroundColor = color;
    this.el.nativeElement.innerHTML = text;
  }

}
