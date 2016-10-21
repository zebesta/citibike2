import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { FormComponent } from './form/form.component';
import { TravelOptionsComponent } from './travel-options/travel-options.component';
import { TravelMethodComponent } from './travel-method/travel-method.component';
import { MapComponent } from './map/map.component';

import { AgmCoreModule } from 'angular2-google-maps/core';
import { MapsRawComponent } from './maps-raw/maps-raw.component';
import { MapDetailComponent } from './map-detail/map-detail.component';

import { AppRoutingModule }     from './app-routing.module';

@NgModule({
  declarations: [
    AppComponent,
    FormComponent,
    TravelOptionsComponent,
    TravelMethodComponent,
    MapComponent,
    MapsRawComponent,
    MapDetailComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyCew4HQlvQXau-LP9DIIDG-mwSe2WtTBXM'
    }),
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
