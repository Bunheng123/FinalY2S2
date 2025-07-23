import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  standalone: true,
  name: 'toKhr'
})
export class ToKhrPipe implements PipeTransform {

  transform(value: string | number, mode: 'in' | 'out' = 'in'): string {
    const num = typeof value === 'string' ? parseFloat(value) : value;

    if (isNaN(num)) return '';

    let riel: number;
    if (mode === 'in') {
      riel = Math.ceil(num * 4100 / 100) * 100;
    } else {
      riel = Math.floor(num * 4100 / 100) * 100;
    }

    return riel.toLocaleString('km-KH') + ' ៛';
  }
}
