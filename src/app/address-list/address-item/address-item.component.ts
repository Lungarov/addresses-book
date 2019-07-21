import { Address } from '../../shared/address.model';
import { Component, OnInit, Input } from '@angular/core';
import { horizontalSlideTrigger } from 'src/app/shared/slide.animations';
import { AddressDataService } from 'src/app/services/address-data.service';

@Component({
  selector: 'app-address-item',
  templateUrl: './address-item.component.html',
  styleUrls: ['./address-item.component.css'],
  animations: [ horizontalSlideTrigger ]
})
export class AddressItemComponent implements OnInit {
  @Input() address: Address;

  constructor(private addressDataService: AddressDataService) { }

  ngOnInit() {
  }

  onDelete() {
    this.addressDataService.deleteAddress(this.address);
  }

}
