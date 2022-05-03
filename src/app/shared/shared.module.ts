import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { DropdownDirective } from './dropdown.directive';
import { CurrencyInputDirective } from './currency-input.directive';

@NgModule({
  declarations: [DropdownDirective, CurrencyInputDirective],
  imports: [CommonModule],
  exports: [DropdownDirective, CommonModule],
})
export class SharedModule {}
