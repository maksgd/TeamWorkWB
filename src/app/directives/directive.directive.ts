import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[appDirective]'
})
export class DirectiveDirective {

  constructor(private elementDOM:ElementRef) { 
    this.elementDOM.nativeElement.style.fontStyle = 'italic';
  }

}
