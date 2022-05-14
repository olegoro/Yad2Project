import {
  Directive,
  HostListener,
  Input,
  EventEmitter,
  Output,
} from '@angular/core';

@Directive({
  selector: '[appAmountInput]',
})
export class CurrencyInputDirective {
  @Input() priceFrom: string = '';
  @Output() valueEntered = new EventEmitter<string>();

  constructor() {}

  @HostListener('keyup', ['$event']) keyPressNumbers(event) {
    let price = event.which ? event.which : event.keyCode;
    let typedValue: string = event.target.value;
    let specialKey = event.charCode;

    if (typedValue.substring(0, 1) === '0') {
      this.priceFrom = '';
      this.valueEntered.emit(this.priceFrom);
      return false;
    }
    // Only Numbers 0-9
    if (price < 48 || price > 57) {
      if (price === 8 || price === 127) {
        this.fixInputValue(typedValue);
        return true;
      }
      // Special keys don't enter
      if (
        (specialKey > 64 && specialKey < 91) ||
        (specialKey > 96 && specialKey < 123) ||
        specialKey == 8 ||
        specialKey == 32 ||
        (specialKey >= 48 && specialKey <= 57)
      ) {
        this.priceFrom = typedValue.substring(0, typedValue.length - 1);
      }
      this.valueEntered.emit(this.priceFrom);
      return false;
    } else if (typedValue.length <= 10) {
      this.fixInputValue(typedValue);
    } else {
      typedValue = typedValue.substring(0, 10);
      this.fixInputValue(typedValue);
    }
  }

  private fixInputValue(typedValue: string) {
    if (typedValue.length <= 7) {
      if (typedValue.length >= 4) {
        typedValue = typedValue.replace(/,/g, '');
        if (typedValue.length >= 4) {
          this.priceFrom =
            typedValue.substring(0, typedValue.length - 3) +
            ',' +
            typedValue.substring(typedValue.length - 3);
        } else {
          this.priceFrom = typedValue;
        }
      } else {
        this.priceFrom = typedValue;
      }
    } else {
      console.log('Before: ' + typedValue + '/' + typedValue.length);
      typedValue = typedValue.replace(/,/g, '');
      console.log('After: ' + typedValue + '/' + typedValue.length);
      if (typedValue.length >= 7 && typedValue.length < 10) {
        this.priceFrom =
          typedValue.substring(0, typedValue.length - 6) +
          ',' +
          typedValue.substring(typedValue.length - 6, typedValue.length - 3) +
          ',' +
          typedValue.substring(typedValue.length - 3);
      } else if (typedValue.length === 6) {
        this.priceFrom =
          typedValue.substring(0, typedValue.length - 3) +
          ',' +
          typedValue.substring(typedValue.length - 3);
      } else {
        typedValue = typedValue.replace(/,/g, '');

        this.priceFrom =
          typedValue.substring(0, typedValue.length - 9) +
          ',' +
          typedValue.substring(typedValue.length - 9, typedValue.length - 6) +
          ',' +
          typedValue.substring(typedValue.length - 6, typedValue.length - 3) +
          ',' +
          typedValue.substring(typedValue.length - 3);
      }
    }
    this.valueEntered.emit(this.priceFrom);
  }
}
