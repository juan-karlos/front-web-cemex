import { Pipe, PipeTransform } from '@angular/core';
import { format } from 'date-fns';
@Pipe({
  name: 'filtroFecha'
})
export class FiltroFechaPipe implements PipeTransform {

  transform(value: any | string): string {
    // if (value) {
    //   const date = typeof value === 'string' ? new Date(value) : value;
    //   return format(date, 'yyyy-MM-dd');
     
    // }
    const date = typeof value === 'string' ? new Date(value) : value;
    return format(date, 'yyyy-mm-dd');
   
   
  }
}
