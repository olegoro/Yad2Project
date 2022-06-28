import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
// import { HeaderComponent } from './forsale/header/header.component';
// import { ForsaleComponent } from './forsale/forsale.component';
// import { ApartmentsComponent } from './apartments/apartments.component';
import { AuthComponent } from './auth/auth.component';
import { PublishComponent } from './publish/publish.component';
import { RegistrationComponent } from './auth/registration/registration.component';
import { LoginComponent } from './auth/login/login.component';
import { PublishHeaderComponent } from './publish/publish-header/publish-header.component';
import { PublishAssetComponent } from './publish/publish-asset/publish-asset.component';
import { ApartmentService } from './apartments/apartments.service';
// import { SearchBarComponent } from './forsale/search-bar/search-bar.component';
// import { DropdownDirective } from './shared/dropdown.directive';
// import { CheckboxDirective } from './shared/checkbox.directive';
// import { ApartmentsDirective } from './apartments/apartments.directive';
// import { AssetTypeSelectionComponent } from './forsale/search-bar/asset-type-selection/asset-type-selection.component';
import { ForsaleModule } from './forsale/forsale.module';
import { SharedModule } from './shared/shared.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { PublishAssetTypeComponent } from './publish/publish-asset/publish-asset-type/publish-asset-type.component';

@NgModule({
  declarations: [
    AppComponent,
    // HeaderComponent,
    // ForsaleComponent,
    // ApartmentsComponent,
    AuthComponent,
    PublishComponent,
    RegistrationComponent,
    LoginComponent,
    PublishHeaderComponent,
    PublishAssetComponent,
    PublishAssetTypeComponent,
    // SearchBarComponent,
    // DropdownDirective,
    // CheckboxDirective,
    // ApartmentsDirective,
    // AssetTypeSelectionComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ForsaleModule,
    SharedModule,
    BrowserAnimationsModule,
  ],
  providers: [ApartmentService],
  bootstrap: [AppComponent],
})
export class AppModule {}
