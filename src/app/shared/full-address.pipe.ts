import { Address } from './address.model';
import { PipeTransform, Pipe } from '@angular/core';

@Pipe({
  name: 'fullAddress'
})
export class FullAddressPipe implements PipeTransform {
  transform(value: Address) {
    return value.name + ', ' + value.address.zip + ', ' + value.address.country;
  }
}
