import { countries } from './../shared/countries';
import { Address } from '../shared/address.model';
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { MessageService } from './message.service';

@Injectable({
  providedIn: 'root'
})
export class AddressDataService {
  addressesChanged: Subject<Address[]> = new Subject();
  addressSelected: Subject<Address> = new Subject();
  index: number;

  addresses: Address[] = [
    {
      name: '790 Queen St Toronto',
      address: {
        zip: 'ABC61', country: 'Canada'
      }
    },
    {
      name: '52 Nesbali St Reykjavík',
      address: {
        zip: 'ABC72', country: 'Iceland'
      }
    },
    {
      name: '1010 Vincent St Auckland ',
      address: {
        zip: 'ABC1', country: 'New Zealand'
      }
    },
    {
      name: '1201 Rue de Cornavin Geneva',
      address: {
        zip: 'ABC58', country: 'Switzerland'
      }
    },
    {
      name: '1 Piazza Galvani Bologna',
      address: {
        zip: 'ABC3', country: 'Italy'
      }
    },
  ];

  constructor(private messageService: MessageService) {}

  addAddress(address: Address) {
    this.addresses.unshift(address);
    this.addressesChanged.next(this.addresses, );
    this.messageService.notificationMessage({message: 'Address was added successfully', color: 'green'});
  }

  selectAddress(index: number) {
    this.index = index;
    this.addressSelected.next(this.addresses[index]);
  }

  updateAddress(updatedAddress: Address) {
    this.addresses[this.index] = updatedAddress;
    this.addressesChanged.next(this.addresses);
    this.messageService.notificationMessage({message: 'Address was updated successfully', color: 'orange'});
  }

  deleteAddress(deletedAddress: Address) {
    this.addresses = this.addresses.filter(address => address !== deletedAddress);
    this.addressesChanged.next(this.addresses);
    this.messageService.notificationMessage({message: 'Address has been deleted', color: 'red'});
  }

  getCountries() {
    return countries;
  }

}
