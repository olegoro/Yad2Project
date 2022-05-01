// import { CommonModule } from '@angular/common';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { ApartmentsComponent } from '../apartments/apartments.component';
import { ApartmentsDirective } from '../apartments/apartments.directive';
import { SharedModule } from '../shared/shared.module';
import { ForsaleComponent } from './forsale.component';
import { HeaderComponent } from './header/header.component';
import { AssetTypeSelectionComponent } from './search-bar/asset-type-selection/asset-type-selection.component';
import { SearchBarComponent } from './search-bar/search-bar.component';
import { RoomsSelectionComponent } from './search-bar/rooms-selection/rooms-selection.component';

@NgModule({
  declarations: [
    ForsaleComponent,
    HeaderComponent,
    SearchBarComponent,
    AssetTypeSelectionComponent,
    ApartmentsComponent,
    ApartmentsDirective,
    RoomsSelectionComponent,
  ],
  imports: [SharedModule],
  exports: [
    ForsaleComponent,
    HeaderComponent,
    SearchBarComponent,
    AssetTypeSelectionComponent,
    ApartmentsComponent,
    ApartmentsDirective,
  ],
})
export class ForsaleModule {}
