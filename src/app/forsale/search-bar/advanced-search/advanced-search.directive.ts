import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appAdvancedSearch]',
})
export class AdvancedSearchDirective {
  constructor(private el: ElementRef) {}

  // @HostListener('document:click', ['$event']) toggleOpen(event: Event) {
  //   let advancedSearch = this.el.nativeElement.querySelector('.advancedSearch');
  //   let contains = this.el.nativeElement.contains(event.target);

  //   console.log(advancedSearch);

  //   if (advancedSearch != null) {
  //     if (!contains) {
  //       advancedSearch.style.display = 'none';
  //       console.log('AAAAAAAA');
  //     }
  //   }
  // }
}
