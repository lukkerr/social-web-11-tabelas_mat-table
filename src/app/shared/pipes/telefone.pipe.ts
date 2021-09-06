import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'telefone'
})
export class TelefonePipe implements PipeTransform {

  transform(value: string): string {
    if ( value && [8, 10, 11].includes(value.length)) {
      if ( value.length === 8 ) {
        return `${value.substring(0, 4)}-${value.substring(4, 8)}`;
      }
      else if ( value.length === 10 ) {
        return `(${value.substring(0, 2)}) ${value.substring(2, 6)}-${value.substring(6, 10)}`;
      }
      else if ( value.length === 11 ) {
        return `(0${value.substring(0, 2)}) ${value.substring(2, 7)}-${value.substring(7, 11)}`;
      }
    } else {
      return value;
    }
  }

}
