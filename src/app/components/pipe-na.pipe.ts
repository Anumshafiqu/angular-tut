import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'pipeNa',
  standalone: false
})
export class PipeNaPipe implements PipeTransform {

  transform(value: unknown): unknown {
    if(value == '' || value == null || value == undefined) {
      return 'Na'
    }else {
      return  value;
    }
  }

}
