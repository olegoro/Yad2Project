import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { PublishAssetService } from '../publish-asset.service';

@Component({
  selector: 'app-publish-asset-type',
  templateUrl: './publish-asset-type.component.html',
  styleUrls: ['./publish-asset-type.component.css'],
})
export class PublishAssetTypeComponent implements OnInit {
  isOpened = true;
  @Output() accordionClosed = new EventEmitter();
  @Output() accordionOpened = new EventEmitter();
  publishCategoryText: string;

  constructor(private publishAssetService: PublishAssetService) {}

  ngOnInit(): void {}

  colorSquareText(squareText: HTMLDivElement) {
    squareText.style.color = '#ff7100';
  }

  removeSquareTextCcolor(squareText: HTMLDivElement) {
    squareText.style.color = '#363636';
  }

  chooseCategory(squareText: HTMLDivElement) {
    this.isOpened = false;

    // this.accordionClosed.emit();

    // this.publishAssetService.asssetCategoryAccordionClosed.emit();
    // this.publishAssetService.asssetCategoryAccordionClosed.pipe();
    this.publishAssetService.asssetCategoryAccordionOpened.next(true);

    switch (squareText.innerText) {
      case 'מכירה':
        this.publishCategoryText = 'אני רוצה למכור נכס';
        break;
      case 'השכרה':
        this.publishCategoryText = 'אני רוצה להשכיר נכס';
        break;
      case 'שותפים':
        this.publishCategoryText = 'אני מחפש שותף';
        break;
      case 'מסחרי':
        this.publishCategoryText = 'אני רוצה לפרסם נכס מסחרי';
        break;
    }
  }

  openAccordion() {
    this.isOpened = true;

    // this.accordionOpened.emit();
    // this.publishAssetService.asssetCategoryAccordionOpened.emit();
    // this.publishAssetService.asssetCategoryAccordionOpened.pipe();
    this.publishAssetService.asssetCategoryAccordionOpened.next(false);
  }
}
