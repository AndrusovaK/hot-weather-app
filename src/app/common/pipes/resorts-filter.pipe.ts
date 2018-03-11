import { Pipe, PipeTransform } from '@angular/core';
import {Resort} from '../../data';

@Pipe({
  name: 'resortsFilter'
})
export class ResortsFilterPipe implements PipeTransform {

  transform(resorts: Resort[], type: string): Resort[] {
    if (!type || type === 'All') {
      return resorts;
    }

    return resorts.filter((resort: Resort) => {
      return resort.types.includes(type);
    });
  }

}
