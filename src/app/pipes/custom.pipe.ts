import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'custom'
})
export class CustomPipe implements PipeTransform {

  transform(value: number, ...args: number[]): unknown {
    const [a]=args;
    
   // return value+10;
   return Math.pow(value,a);
  }

}
