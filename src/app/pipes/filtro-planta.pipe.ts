import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filtroPlanta'
})
export class FiltroPlantaPipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): unknown {
    return null;
  }

}
