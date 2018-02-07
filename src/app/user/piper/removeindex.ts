import { Pipe, PipeTransform } from '@angular/core';

@Pipe({name: 'removeIndex'})
export class RemoveIndex implements PipeTransform {
	transform(value:any){
        try {
            if(value[0][0].length == 0){
                return value.splice(1, value.length);
            }else{
                return value;
            }
        }
        catch(err) {
            console.log("loading..")
        }

	}
}