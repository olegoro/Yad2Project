import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-publish-asset',
  templateUrl: './publish-asset.component.html',
  styleUrls: ['./publish-asset.component.css'],
})
export class PublishAssetComponent implements OnInit {
  // openAccordion = false;

  assets = [
    'דירה',
    'דירת גן',
    'בית פרטי/קוטג',
    'גג פנטהאוס',
    'מגרשים',
    'דופלקס',
    'דירת נופש',
    'דו משפחתי',
    'מרטף/פרטר',
    'טריפלקס',
    'יחידת דיור',
    'משק חקלאי/נחלה',
    'משק עזר',
    'דיור מוגן',
    'בניין מגורים',
    'סטודיו/לופט',
    'מחסן',
    'חניה',
    'קב` רכישה/זכות לנכס',
    'כללי',
  ];

  assetTitles = [
    'אני רוצה למכור נכס',
    'כתובת הנכס',
    'על הנכס',
    'תשלומים, תאריכים ועוד',
    'תמונות וסרטונים',
    'פרטים ליצירת קשר',
    'בחירת מסלול',
  ];

  numberOfRooms = [
    0, 1, 1.5, 2, 2.5, 3, 3.5, 4, 4.5, 5, 5.5, 6, 6.5, 7, 7.5, 8, 8.5, 9, 9.5,
    10, 10.5, 11, 11.5, 12, 12.5,
  ];

  selectedAssetValue = '-1';
  selectedNumberOfRoomsValue = '-1';

  constructor() {}

  ngOnInit(): void {}

  // onAccordionClosed() {
  //   this.openAccordion = true;
  // }

  // onAccordionOpened() {
  //   this.openAccordion = false;
  // }

  onSubmit(form: NgForm) {
    console.log(form);
  }
}
