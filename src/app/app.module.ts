import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { FormComponent } from './form/form.component';
import { TravelOptionsComponent } from './travel-options/travel-options.component';
import { TravelMethodComponent } from './travel-method/travel-method.component';

@NgModule({
  declarations: [
    AppComponent,
    FormComponent,
    TravelOptionsComponent,
    TravelMethodComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
