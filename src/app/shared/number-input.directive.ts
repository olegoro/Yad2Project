import { Directive, HostListener } from '@angular/core';

@Directive({
  selector: '[appNumberInput]',
})
export class NumberInputDirective {
  constructor() {}

  @HostListener('keypress', ['$event']) keyPressNumber(event) {
    var k;
    k = event.charCode;
    return k >= 48 && k <= 57;
  }
}
