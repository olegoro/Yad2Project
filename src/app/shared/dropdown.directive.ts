import {
  EventEmitter,
  Directive,
  HostListener,
  ElementRef,
  Renderer2,
  Output,
} from '@angular/core';

@Directive({
  selector: '[appDropdown]',
})
export class DropdownDirective {
  isArrowDown = true;
  @Output() clickedOutside = new EventEmitter();

  constructor(private el: ElementRef, private renderer: Renderer2) {}

  @HostListener('document:click', ['$event']) toggleOpen(event: Event) {
    let dropdownList = this.el.nativeElement.querySelector('.dropdownList');
    let dropdownArrow = this.el.nativeElement.querySelector('.arrow');
    let contains = this.el.nativeElement.contains(event.target);
    let children = [
      this.el.nativeElement.querySelector('.dropdown'),
      ...this.el.nativeElement.querySelector('.dropdown').children,
    ];
    if (contains) {
      if (this.isArrowDown) {
        this.openDropdown(dropdownArrow, dropdownList);
      } else if (children.includes(event.target)) {
        this.closeDropdown(dropdownArrow, dropdownList);
      }
    } else {
      if (!this.isArrowDown) {
        this.closeDropdown(dropdownArrow, dropdownList);
        this.clickedOutside.emit();
      }
    }
  }

  private openDropdown(dropdownArrow, dropdownList) {
    this.renderer.removeClass(dropdownArrow, 'down');
    this.renderer.addClass(dropdownArrow, 'up');
    dropdownList.style.display = 'flex';
    this.isArrowDown = !this.isArrowDown;
  }

  private closeDropdown(dropdownArrow, dropdownList) {
    this.renderer.removeClass(dropdownArrow, 'up');
    this.renderer.addClass(dropdownArrow, 'down');
    dropdownList.style.display = 'none';
    this.isArrowDown = !this.isArrowDown;
  }
}
