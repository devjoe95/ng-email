import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'kebabcase',
})
export class KebabCasePipe implements PipeTransform {
  transform(value: string): string {
    return value.trim().toLowerCase().replace(' ', '-');
  }
}
