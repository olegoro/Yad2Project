import {
  Directive,
  ElementRef,
  HostListener,
  Input,
  Renderer2,
} from '@angular/core';

@Directive({
  selector: '[appCheckbox]',
})
export class CheckboxDirective {
  isChecked = false;

  constructor(private el: ElementRef, private renderer: Renderer2) {}

  @HostListener('click') checkOrUncheckCheckbox() {
    let checkbox = this.el.nativeElement.querySelector('.checkbox');
    this.isChecked = checkbox.classList.contains('clickedCheckboxBackground');
    if (!this.isChecked) {
      this.renderer.addClass(checkbox, 'clickedCheckboxBackground');
    } else {
      this.renderer.removeClass(checkbox, 'clickedCheckboxBackground');
    }
    this.isChecked = !this.isChecked;
  }
}
