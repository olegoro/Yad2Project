import { Injectable, EventEmitter } from '@angular/core';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class PublishAssetService {
  // asssetCategoryAccordionOpened = new EventEmitter<boolean>();
  asssetCategoryAccordionOpened = new Subject<boolean>();

  // asssetCategoryAccordionOpened = new EventEmitter();

  // asssetCategoryAccordionClosed = new Observable((observer) => {
  //   observer.next();
  // });
  // asssetCategoryAccordionOpened = new Observable();

  constructor() {}
}
