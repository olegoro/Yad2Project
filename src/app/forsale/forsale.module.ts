// import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatInputModule } from '@angular/material/input';
import { MatNativeDateModule } from '@angular/material/core';
import { RouterModule } from '@angular/router';

import { ApartmentsComponent } from '../apartments/apartments.component';
import { ApartmentsDirective } from '../apartments/apartments.directive';
import { SharedModule } from '../shared/shared.module';
import { ForsaleComponent } from './forsale.component';
import { HeaderComponent } from './header/header.component';
import { AssetTypeSelectionComponent } from './search-bar/asset-type-selection/asset-type-selection.component';
import { SearchBarComponent } from './search-bar/search-bar.component';
import { RoomsSelectionComponent } from './search-bar/rooms-selection/rooms-selection.component';
import { AdvancedSearchComponent } from './search-bar/advanced-search/advanced-search.component';
import { AdvancedSearchDirective } from './search-bar/advanced-search/advanced-search.directive';

@NgModule({
  declarations: [
    ForsaleComponent,
    HeaderComponent,
    SearchBarComponent,
    AssetTypeSelectionComponent,
    ApartmentsComponent,
    ApartmentsDirective,
    RoomsSelectionComponent,
    AdvancedSearchComponent,
    AdvancedSearchDirective,
  ],
  imports: [
    SharedModule,
    FormsModule,
    MatDatepickerModule,
    MatInputModule,
    MatNativeDateModule,
    RouterModule,
  ],
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
