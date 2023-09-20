import { Pipe, PipeTransform } from '@angular/core';


@Pipe({
  name: 'filtroPlanta'
})
export class FiltroPlantaPipe implements PipeTransform {



  transform(value: any, arg: any): any {
   const resultPost = [];
   
   for ( const post of value) {
 
    if(post.nombre_planta.toLowerCase().indexOf(arg.toLowerCase()) > -1){
    resultPost.push(post);
    }
    
   }
   return resultPost;
  }
  
}
