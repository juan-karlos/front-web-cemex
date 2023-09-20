import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filtroPlanta'
})
export class FiltroPlantaPipe implements PipeTransform {

  transform(value: any, arg: any): any {
   const resultpost = [];
   for (const post of value) {
  
    if(post.nombre_planta.toLowerCase().indexOf(arg.toLowerCase())> -1){
    resultpost.push(post);
    }
    return resultpost;
   }
  }
  
}
