import { AddressDataService } from './../services/address-data.service';
import { Address } from '../shared/address.model';
import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-edit-address',
  templateUrl: './edit-address.component.html',
  styleUrls: ['./edit-address.component.css']
})
export class EditAddressComponent implements OnInit {
  // @ViewChild('f', {static: false}) addressForm: NgForm;
  address: Address = new Address('', {zip: '', country: ''});
  editMode = false;
  formRejected: boolean;
  countries: {name: string, code: string}[] = [];

  constructor(private addressDataService: AddressDataService) { }

  ngOnInit() {
    this.countries = this.addressDataService.getCountries();
    this.addressDataService.addressSelected.subscribe((selectedAddress) => {
      this.address = selectedAddress;
      this.editMode = true;
    });
  }

  onSubmit(addressForm: NgForm) {
    if (addressForm.invalid) {
      this.formRejected = true;
      return;
    } else {
      if (this.editMode) {
        const updatedAddress = new Address(
          addressForm.value.name,
          {
            zip: addressForm.value.zip,
            country: addressForm.value.country
          });
        this.addressDataService.updateAddress(updatedAddress);
      } else {
        const newAddress = new Address(
          addressForm.value.name,
          {
            zip: addressForm.value.zip,
            country: addressForm.value.country
          });
        this.addressDataService.addAddress(newAddress);
      }
      this.formRejected = false;
      this.clearForm(addressForm);
    }
  }

  clearForm(addressForm: NgForm) {
    addressForm.reset();
    this.formRejected = false;
    this.editMode = false;
  }

}
