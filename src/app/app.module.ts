import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { EditAddressComponent } from './edit-address/edit-address.component';
import { AddressListComponent } from './address-list/address-list.component';
import { AddressItemComponent } from './address-list/address-item/address-item.component';
import { HeaderComponent } from './header/header.component';
import { FullAddressPipe } from './shared/full-address.pipe';


@NgModule({
  declarations: [
    AppComponent,
    EditAddressComponent,
    AddressListComponent,
    AddressItemComponent,
    HeaderComponent,
    FullAddressPipe
  ],
  imports: [
    BrowserModule,
    FormsModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
