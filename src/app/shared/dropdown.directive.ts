import { Directive, HostListener, ElementRef, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appDropdown]',
})
export class DropdownDirective {
  isArrowDown = true;
  private i;
  private sibling;

  constructor(private el: ElementRef, private renderer: Renderer2) {}

  @HostListener('click') showOrHideDropdown() {
    console.log(this.el.nativeElement);
    this.sibling = this.renderer.nextSibling(this.el.nativeElement);
    this.i = this.el.nativeElement.querySelector('i');
    if (this.isArrowDown) {
      this.renderer.removeClass(this.i, 'down');
      this.renderer.addClass(this.i, 'up');
      this.sibling.style.display = 'flex';
    } else {
      this.renderer.removeClass(this.i, 'up');
      this.renderer.addClass(this.i, 'down');
      this.sibling.style.display = 'none';
    }
    this.isArrowDown = !this.isArrowDown;
  }

  @HostListener('document:click', ['$event']) toggleOpen(event: Event) {}

  // @HostListener('document:click', ['$event']) toggleOpen(event: Event) {
  // this.i = this.el.nativeElement.querySelector('i');
  // this.sibling = this.renderer.nextSibling(this.el.nativeElement);

  // if (this.sibling.contains(this.el.nativeElement)) {
  //   console.log(this.el);
  // }

  // if (this.el.nativeElement.className === 'roomsMenu__from_Button') {
  //   console.log(this.el.nativeElement.className);
  // }

  // if (!this.el.nativeElement.contains(event.target)) {
  //   if (
  //     this.sibling.className !== 'roomsMenu' &&
  //     this.sibling.className !== 'searchBar__data__asset_Dropdown__values'
  //   ) {
  //     this.renderer.removeClass(this.i, 'up');
  //     this.renderer.addClass(this.i, 'down');
  //     this.sibling.style.display = 'none';
  //     this.isArrowDown = true;
  //   }
  // }

  // }

  // @HostListener('document:click', ['$event']) toggleOpen(event: Event) {
  //   // console.log(this.renderer.parentNode(this.el.nativeElement));
  //   // this.isArrowDown = this.el.nativeElement.contains(event.target)
  //   //   ? !this.isArrowDown
  //   //   : false;

  //   if (!this.el.nativeElement.contains(event.target)) {
  //     this.renderer.removeClass(this.i, 'down');
  //     this.renderer.addClass(this.i, 'up');
  //     this.sibling.style.display = 'flex';
  //   } else {
  //     this.renderer.removeClass(this.i, 'up');
  //     this.renderer.addClass(this.i, 'down');
  //     this.sibling.style.display = 'none';
  //   }
  //   this.isArrowDown = !this.isArrowDown;
  // }
}
