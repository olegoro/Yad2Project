import { Component, ElementRef, Input, OnInit, Renderer2 } from '@angular/core';

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.css'],
})
export class SearchBarComponent implements OnInit {
  priceFrom: string = '';
  priceTo: string = '';
  numberOfCheckedApartmentProperties = 0;
  @Input() isPlusInCircle = true;

  constructor() {}

  ngOnInit(): void {}

  onAdvancedSearchButtonClick() {
    this.isPlusInCircle = !this.isPlusInCircle;
  }

  onPriceValueFromEntered(priceForm) {
    this.priceFrom = priceForm;
  }

  onPriceValueToEntered(priceTo) {
    this.priceTo = priceTo;
  }

  onApartmentPropertyClicked(numberOfCheckedApartmentProperties: number) {
    this.numberOfCheckedApartmentProperties =
      numberOfCheckedApartmentProperties;
  }
}
