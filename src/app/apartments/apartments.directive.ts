import { ThisReceiver } from '@angular/compiler';
import { Directive, ElementRef, HostListener, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appApartments]',
})
export class ApartmentsDirective {
  isApartmentDetailsOpened = false;

  constructor(private el: ElementRef, private renderer: Renderer2) {}

  @HostListener('click') openOrCloseApartmentDetails() {
    let apartmentDetails =
      this.el.nativeElement.querySelector('.apartmentDetails');

    this.isApartmentDetailsOpened = !this.isApartmentDetailsOpened;

    apartmentDetails.style.display = this.isApartmentDetailsOpened
      ? 'inline'
      : 'none';
  }
}
