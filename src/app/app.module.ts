import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { UserProfileComponent } from './user-profile/user-profile.component';
import { AddressAutocompleteComponent } from './address-autocomplete/address-autocomplete.component';
import { AppMaterialModule } from './app-material/app-material.module';
import { MapsAutocompleteComponent } from './maps-autocomplete/maps-autocomplete.component';
import {MatCardModule} from '@angular/material';
@NgModule({
  declarations: [
    AppComponent,
    UserProfileComponent,
    AddressAutocompleteComponent,
    MapsAutocompleteComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    AppMaterialModule,
    FormsModule,
    MatCardModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
