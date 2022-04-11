import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthComponent } from './auth/auth.component';
import { ForsaleComponent } from './forsale/forsale.component';
import { PublishAssetComponent } from './publish/publish-asset/publish-asset.component';
import { PublishComponent } from './publish/publish.component';
import { RegistrationComponent } from './auth/registration/registration.component';

const routes: Routes = [
  { path: '', component: ForsaleComponent },
  { path: 'auth', component: AuthComponent },
  { path: 'registration', component: RegistrationComponent },
  { path: 'publish', component: PublishComponent },
  { path: 'publishAsset', component: PublishAssetComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
