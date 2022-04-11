import { Component, ElementRef, OnInit, Renderer2 } from '@angular/core';
import { SelectedAssetData } from './selected-asset-data.model';

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.css'],
})
export class SearchBarComponent implements OnInit {
  // numberOfChosenAssetTypes: number = 0;

  isPlusInCircle = true;
  // isApartmentsAssetArrowDown = true;
  // isHousesAssetArrowDown = true;
  // isAnotherAssetsArrowDown = true;

  // isAllAssetsChecked = false;

  // public static MAX_APARTMENT_SUBTYPES: number = 9;
  // public static MAX_HOUSES_SUBTYPES: number = 4;
  // public static MAX_ADDITIONAL_TYPES_SUBTYPES: number = 7;

  // selectedApartmentData = new SelectedAssetData(
  //   false,
  //   new Array(SearchBarComponent.MAX_APARTMENT_SUBTYPES).fill(false),
  //   0
  // );
  // selectedHousesData = new SelectedAssetData(
  //   false,
  //   new Array(SearchBarComponent.MAX_HOUSES_SUBTYPES).fill(false),
  //   0
  // );
  // selectedAdditionalData = new SelectedAssetData(
  //   false,
  //   new Array(SearchBarComponent.MAX_ADDITIONAL_TYPES_SUBTYPES).fill(false),
  //   0
  // );

  // selectedAssetDataCollection: SelectedAssetData[] = [
  //   this.selectedApartmentData,
  //   this.selectedHousesData,
  //   this.selectedAdditionalData,
  // ];

  // apartmentAssets = [
  //   'דירות',
  //   'דירת גן',
  //   'גג/פנטהאוס',
  //   'דופלקס',
  //   'דירת נופש',
  //   'מרטף/פרטר',
  //   'טריפלקס',
  //   'יחידת דיור',
  //   'סטודיו/לופט',
  // ];

  // housesAssets = ['בית פרטי/קוטג', 'דו משפחתי', 'משק חקלאי/נחלה', 'משק עזר'];

  // anotherAssets = [
  //   'מגרשים',
  //   'דיור מוגן',
  //   'בניין מגורים',
  //   'מחסן',
  //   'חניה',
  //   'קב רכישה/זכות לנכס',
  //   'כללי',
  // ];

  numberOfRooms = [
    'הכל',
    '1',
    '1.5',
    '2',
    '2.5',
    '3',
    '3.5',
    '4',
    '4.5',
    '5',
    '5.5',
    '6',
    '6.5',
    '7',
    '7.5',
    '8',
    '8.5',
    '9',
    '9.5',
    '10',
    '10.5',
    '11',
    '11.5',
    '12',
    '12.5',
  ];

  advancedStoriesAmountValues = [
    'הכל',
    'מרתף/פרטר',
    '0',
    '1',
    '2',
    '3',
    '4',
    '5',
    '6',
    '7',
    '8',
    '9',
    '10',
    '11',
    '12',
    '13',
    '14',
    '15',
    '16',
    '17',
  ];

  advancedSearchCheckboxData = [
    'חניה',
    'מעלית',
    'מיזוג',
    'מרפסת',
    'ממ"ד',
    'סורגים',
    'מחסן',
    'גישה לנכים',
    'משופצת',
    'מרוהטת',
    'בבלעדיות',
  ];

  constructor(private elem: ElementRef, private renderer: Renderer2) {}

  // get maxAmountOfApartmentSubtypes() {
  //   return SearchBarComponent.MAX_APARTMENT_SUBTYPES;
  // }

  // get maxAmountOfHousesSubtypes() {
  //   return SearchBarComponent.MAX_HOUSES_SUBTYPES;
  // }

  // get maxAmountOfAdditionalTypesSubtypes() {
  //   return SearchBarComponent.MAX_ADDITIONAL_TYPES_SUBTYPES;
  // }

  // get maxAmountOfChosenAssets() {
  //   return (
  //     SearchBarComponent.MAX_APARTMENT_SUBTYPES +
  //     SearchBarComponent.MAX_HOUSES_SUBTYPES +
  //     SearchBarComponent.MAX_ADDITIONAL_TYPES_SUBTYPES
  //   );
  // }

  ngOnInit(): void {}

  onAdvancedSearchButtonClick() {
    this.isPlusInCircle = !this.isPlusInCircle;
  }

  // onApartmentsAssetArrowClick() {
  //   this.isApartmentsAssetArrowDown = !this.isApartmentsAssetArrowDown;
  // }

  // onHousesAssetArrowClick() {
  //   this.isHousesAssetArrowDown = !this.isHousesAssetArrowDown;
  // }

  // onAnotherAssetsArrowClick() {
  //   this.isAnotherAssetsArrowDown = !this.isAnotherAssetsArrowDown;
  // }

  // private checkOrUncheckSubtypes(
  //   selectedAssetData: SelectedAssetData,
  //   maxCheckedSubtypes: number
  // ) {
  //   selectedAssetData.isAllTypesOfSubtypeChecked = this.isAllAssetsChecked;
  //   selectedAssetData.subtypesChecksCounter =
  //     selectedAssetData.isAllTypesOfSubtypeChecked ? maxCheckedSubtypes : 0;

  //   selectedAssetData.isSubtypeCheckedArray.fill(this.isAllAssetsChecked);
  // }

  // onCheckOrUncheckAllAssets() {
  //   this.isAllAssetsChecked = !this.isAllAssetsChecked;

  //   this.numberOfChosenAssetTypes = this.maxAmountOfChosenAssets;

  //   this.checkOrUncheckSubtypes(
  //     this.selectedApartmentData,
  //     SearchBarComponent.MAX_APARTMENT_SUBTYPES
  //   );
  //   this.checkOrUncheckSubtypes(
  //     this.selectedHousesData,
  //     SearchBarComponent.MAX_HOUSES_SUBTYPES
  //   );
  //   this.checkOrUncheckSubtypes(
  //     this.selectedAdditionalData,
  //     SearchBarComponent.MAX_ADDITIONAL_TYPES_SUBTYPES
  //   );
  // }

  // onCheckOrUncheckAssetsTypes(
  //   selectedAssetData: SelectedAssetData,
  //   maxSubtypes: number
  // ) {
  //   selectedAssetData.isAllTypesOfSubtypeChecked =
  //     !selectedAssetData.isAllTypesOfSubtypeChecked;

  //   selectedAssetData.isSubtypeCheckedArray.fill(
  //     selectedAssetData.isAllTypesOfSubtypeChecked
  //   );

  //   selectedAssetData.subtypesChecksCounter =
  //     selectedAssetData.isAllTypesOfSubtypeChecked ? maxSubtypes : 0;

  //   this.isAllAssetsChecked = !this.selectedAssetDataCollection.every(
  //     (s) => s.isAllTypesOfSubtypeChecked
  //   )
  //     ? false
  //     : true;

  //   this.numberOfChosenAssetTypes = selectedAssetData.isAllTypesOfSubtypeChecked
  //     ? this.numberOfChosenAssetTypes +
  //       selectedAssetData.isSubtypeCheckedArray.length
  //     : this.numberOfChosenAssetTypes -
  //       selectedAssetData.isSubtypeCheckedArray.length;
  // }

  // onCheckOrUncheckAssetsType(
  //   selectedAssetData: SelectedAssetData,
  //   maxSubtypes: number,
  //   id: string,
  //   index: number
  // ) {
  //   let apartmentTypeCheckbox = this.elem.nativeElement.querySelector('#' + id);

  //   selectedAssetData.isSubtypeCheckedArray[index] =
  //     apartmentTypeCheckbox.classList.contains('clickedCheckboxBackground');

  //   if (selectedAssetData.isSubtypeCheckedArray[index]) {
  //     this.renderer.removeClass(
  //       apartmentTypeCheckbox,
  //       'clickedCheckboxBackground'
  //     );
  //     selectedAssetData.subtypesChecksCounter--;
  //     this.numberOfChosenAssetTypes--;
  //     selectedAssetData.isAllTypesOfSubtypeChecked = false;
  //     selectedAssetData.isSubtypeCheckedArray[index] = false;
  //   } else {
  //     this.renderer.addClass(
  //       apartmentTypeCheckbox,
  //       'clickedCheckboxBackground'
  //     );
  //     selectedAssetData.subtypesChecksCounter++;
  //     this.numberOfChosenAssetTypes++;
  //     if (selectedAssetData.subtypesChecksCounter === maxSubtypes) {
  //       selectedAssetData.isAllTypesOfSubtypeChecked = true;
  //     }
  //     selectedAssetData.isSubtypeCheckedArray[index] = true;
  //   }
  // }
}
