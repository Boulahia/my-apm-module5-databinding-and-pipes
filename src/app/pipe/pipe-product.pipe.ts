import { Pipe, PipeTransform } from '@angular/core';
import { IProduct } from '../domain/iproduct';

@Pipe({
  name: 'pipeProduct'
})
export class PipeProductPipe implements PipeTransform {

  transform(value: IProduct[], filterBy: string): IProduct[] {
    return value.filter(prodcut => prodcut.productName.search(filterBy));
  }

}
