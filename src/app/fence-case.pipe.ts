import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'fenceCase'
})
export class FenceCasePipe implements PipeTransform {

  transform(value: string): string {
    return value.toLocaleLowerCase().split('').map((char,index)=> (index % 2 === 0) ? char.toUpperCase() : char.toLowerCase() ).join('');
  }

}
