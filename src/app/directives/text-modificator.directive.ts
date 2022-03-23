import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[appTextModificator]'
})
export class TextModificatorDirective {

  constructor(private el:ElementRef) {}

  @Input() BgColor = 'purple'
  @Input() TextStart = '. Happy Бездей!'

  textInit: string = ''


  @HostListener('mouseenter') onMouseEnter() {
    this.textInit = this.el.nativeElement.innerHTML
    this.textmodificatorColor(this.BgColor, this.textInit + this.TextStart);
  }

  @HostListener('mouseleave') onMouseLeave() {
    this.textmodificatorColor('', this.textInit);
  }

  private textmodificatorColor(color: string, text: string) {
    this.el.nativeElement.style.backgroundColor = color;
    this.el.nativeElement.innerHTML = text;
  }

}
