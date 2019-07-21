import { AddressDataService } from './../services/address-data.service';
import { Address } from '../shared/address.model';
import { Component, OnInit } from '@angular/core';
import { horizontalSlideTrigger } from '../shared/slide.animations';

@Component({
  selector: 'app-address-list',
  templateUrl: './address-list.component.html',
  styleUrls: ['./address-list.component.css'],
  animations: [ horizontalSlideTrigger ]
})
export class AddressListComponent implements OnInit {
  addresses: Address[];

  constructor(private addressDataService: AddressDataService) { }

  ngOnInit() {
    this.addressDataService.addressesChanged.subscribe((newAddresses) => {
      this.addresses = newAddresses;
    });
    this.addresses = this.addressDataService.addresses;
  }

  onSelect(index: number) {
    this.addressDataService.selectAddress(index);
  }

}
