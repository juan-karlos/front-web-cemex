import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filtroPermiso'
})
export class FiltroPermisoPipe implements PipeTransform {
  transform(value: any, arg: any): any {
    const resultPost = [];
    
    for ( const post of value) {
  
     if(post.nombre_requerimiento.toLowerCase().indexOf(arg.toLowerCase()) > -1){
     resultPost.push(post);
     }
     
    }
    return resultPost;
   }
}
