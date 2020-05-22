import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ManageEmployersFormModule } from './manage-employers-form/manage-employers-form.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    ManageEmployersFormModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
