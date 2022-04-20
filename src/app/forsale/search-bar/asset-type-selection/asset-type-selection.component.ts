import { Component, ElementRef, OnInit, Renderer2 } from '@angular/core';
import { SelectedAssetData } from '../selected-asset-data.model';

@Component({
  selector: 'app-asset-type-selection',
  templateUrl: './asset-type-selection.component.html',
  styleUrls: ['./asset-type-selection.component.css'],
})
export class AssetTypeSelectionComponent implements OnInit {
  numberOfChosenAssetTypes: number = 0;

  isApartmentsAssetArrowDown = true;
  isHousesAssetArrowDown = true;
  isAnotherAssetsArrowDown = true;

  isAllAssetsChecked = false;

  public static MAX_APARTMENT_SUBTYPES: number = 9;
  public static MAX_HOUSES_SUBTYPES: number = 4;
  public static MAX_ADDITIONAL_TYPES_SUBTYPES: number = 7;

  selectedApartmentData = new SelectedAssetData(
    false,
    new Array(AssetTypeSelectionComponent.MAX_APARTMENT_SUBTYPES).fill(false),
    0
  );
  selectedHousesData = new SelectedAssetData(
    false,
    new Array(AssetTypeSelectionComponent.MAX_HOUSES_SUBTYPES).fill(false),
    0
  );
  selectedAdditionalData = new SelectedAssetData(
    false,
    new Array(AssetTypeSelectionComponent.MAX_ADDITIONAL_TYPES_SUBTYPES).fill(
      false
    ),
    0
  );

  selectedAssetDataCollection: SelectedAssetData[] = [
    this.selectedApartmentData,
    this.selectedHousesData,
    this.selectedAdditionalData,
  ];

  apartmentAssets = [
    'דירות',
    'דירת גן',
    'גג/פנטהאוס',
    'דופלקס',
    'דירת נופש',
    'מרטף/פרטר',
    'טריפלקס',
    'יחידת דיור',
    'סטודיו/לופט',
  ];

  housesAssets = ['בית פרטי/קוטג', 'דו משפחתי', 'משק חקלאי/נחלה', 'משק עזר'];

  anotherAssets = [
    'מגרשים',
    'דיור מוגן',
    'בניין מגורים',
    'מחסן',
    'חניה',
    'קב רכישה/זכות לנכס',
    'כללי',
  ];

  constructor(private elem: ElementRef, private renderer: Renderer2) {}

  get maxAmountOfApartmentSubtypes() {
    return AssetTypeSelectionComponent.MAX_APARTMENT_SUBTYPES;
  }

  get maxAmountOfHousesSubtypes() {
    return AssetTypeSelectionComponent.MAX_HOUSES_SUBTYPES;
  }

  get maxAmountOfAdditionalTypesSubtypes() {
    return AssetTypeSelectionComponent.MAX_ADDITIONAL_TYPES_SUBTYPES;
  }

  get maxAmountOfChosenAssets() {
    return (
      AssetTypeSelectionComponent.MAX_APARTMENT_SUBTYPES +
      AssetTypeSelectionComponent.MAX_HOUSES_SUBTYPES +
      AssetTypeSelectionComponent.MAX_ADDITIONAL_TYPES_SUBTYPES
    );
  }

  ngOnInit(): void {}

  onAssetArrowClick(
    isApartmentsAssetArrowDown,
    isHousesAssetArrowDown,
    isAnotherAssetsArrowDown
  ) {
    this.isApartmentsAssetArrowDown = !this.isApartmentsAssetArrowDown
      ? true
      : isApartmentsAssetArrowDown;
    this.isHousesAssetArrowDown = !this.isHousesAssetArrowDown
      ? true
      : isHousesAssetArrowDown;
    this.isAnotherAssetsArrowDown = !this.isAnotherAssetsArrowDown
      ? true
      : isAnotherAssetsArrowDown;
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

  private checkOrUncheckSubtypes(
    selectedAssetData: SelectedAssetData,
    maxCheckedSubtypes: number
  ) {
    selectedAssetData.isAllTypesOfSubtypeChecked = this.isAllAssetsChecked;
    selectedAssetData.subtypesChecksCounter =
      selectedAssetData.isAllTypesOfSubtypeChecked ? maxCheckedSubtypes : 0;

    selectedAssetData.isSubtypeCheckedArray.fill(this.isAllAssetsChecked);
  }

  onCheckOrUncheckAllAssets() {
    this.isAllAssetsChecked = !this.isAllAssetsChecked;

    this.numberOfChosenAssetTypes = this.maxAmountOfChosenAssets;

    this.checkOrUncheckSubtypes(
      this.selectedApartmentData,
      AssetTypeSelectionComponent.MAX_APARTMENT_SUBTYPES
    );
    this.checkOrUncheckSubtypes(
      this.selectedHousesData,
      AssetTypeSelectionComponent.MAX_HOUSES_SUBTYPES
    );
    this.checkOrUncheckSubtypes(
      this.selectedAdditionalData,
      AssetTypeSelectionComponent.MAX_ADDITIONAL_TYPES_SUBTYPES
    );
  }

  onCheckOrUncheckAssetsTypes(
    selectedAssetData: SelectedAssetData,
    maxSubtypes: number
  ) {
    selectedAssetData.isAllTypesOfSubtypeChecked =
      !selectedAssetData.isAllTypesOfSubtypeChecked;

    selectedAssetData.isSubtypeCheckedArray.fill(
      selectedAssetData.isAllTypesOfSubtypeChecked
    );

    selectedAssetData.subtypesChecksCounter =
      selectedAssetData.isAllTypesOfSubtypeChecked ? maxSubtypes : 0;

    this.isAllAssetsChecked = !this.selectedAssetDataCollection.every(
      (s) => s.isAllTypesOfSubtypeChecked
    )
      ? false
      : true;

    this.numberOfChosenAssetTypes = this.sumOfAllSubAssets();
  }

  private sumOfAllSubAssets() {
    var count = 0;

    for (let i = 0; i < this.selectedAssetDataCollection.length; i++) {
      count += this.selectedAssetDataCollection[i].subtypesChecksCounter;
    }

    return count;
  }

  onCheckOrUncheckAssetsType(
    selectedAssetData: SelectedAssetData,
    maxSubtypes: number,
    id: string,
    index: number
  ) {
    let apartmentTypeCheckbox = this.elem.nativeElement.querySelector('#' + id);

    selectedAssetData.isSubtypeCheckedArray[index] =
      apartmentTypeCheckbox.classList.contains('clickedCheckboxBackground');

    if (selectedAssetData.isSubtypeCheckedArray[index]) {
      this.renderer.removeClass(
        apartmentTypeCheckbox,
        'clickedCheckboxBackground'
      );
      selectedAssetData.subtypesChecksCounter--;
      this.numberOfChosenAssetTypes--;
      selectedAssetData.isAllTypesOfSubtypeChecked = false;
      selectedAssetData.isSubtypeCheckedArray[index] = false;
    } else {
      this.renderer.addClass(
        apartmentTypeCheckbox,
        'clickedCheckboxBackground'
      );
      selectedAssetData.subtypesChecksCounter++;
      this.numberOfChosenAssetTypes++;
      if (selectedAssetData.subtypesChecksCounter === maxSubtypes) {
        selectedAssetData.isAllTypesOfSubtypeChecked = true;
      }
      selectedAssetData.isSubtypeCheckedArray[index] = true;
    }
  }
}
