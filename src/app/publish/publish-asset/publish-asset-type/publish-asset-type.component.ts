import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-publish-asset-type',
  templateUrl: './publish-asset-type.component.html',
  styleUrls: ['./publish-asset-type.component.css'],
})
export class PublishAssetTypeComponent implements OnInit {
  isOpened = true;
  publishCategoryText: string;
  constructor() {}

  ngOnInit(): void {}

  colorSquareText(squareText: HTMLDivElement) {
    squareText.style.color = '#ff7100';
  }

  removeSquareTextCcolor(squareText: HTMLDivElement) {
    squareText.style.color = '#363636';
  }

  chooseCategory(squareText: HTMLDivElement) {
    this.isOpened = false;

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
  }
}
