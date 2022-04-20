import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'transformBoxOffice',
})
export class TransformBoxOfficePipe implements PipeTransform {
  transform(num: any): any {
    if (typeof num === 'number') {
      if (num < 1000) return '$' + num;
      if (num < 1000000) return '$' + (num / 1000).toFixed(2) + ' K';
      if (num > 1000000 && num < 1000000000)
        return '$' + (num / 1000000).toFixed(2) + ' M';
    } else {
      return 'unknown';
    }
  }
}
