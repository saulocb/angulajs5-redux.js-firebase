import { Pipe, PipeTransform } from '@angular/core';

@Pipe({name: 'takeoffirst'})
export class selectPipe implements PipeTransform {
	transform(value:any){
        if(value.length > 0){
            return value.splice(1, value.length);
        }else{
            return value;
        }
	}
}