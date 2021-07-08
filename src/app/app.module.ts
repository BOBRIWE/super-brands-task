import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ManageEmployersFormModule } from './manage-employers-form/manage-employers-form.module';
import { CreateWorkerShopRequestService } from './backend/services/create-worker-shop-request.service';
import { ShopsService } from './backend/services/shops.service';
import { EmployersService } from './backend/services/employers.service';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    ManageEmployersFormModule
  ],
  providers: [
    CreateWorkerShopRequestService,
    ShopsService,
    EmployersService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
