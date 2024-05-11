import { Pipe, PipeTransform } from '@angular/core';
import { MenuItem } from '../service/menu.model';

@Pipe({
  name: 'filterbygroup'
})
export class FilterbygroupPipe implements PipeTransform {

  transform(items: MenuItem[], group: string): MenuItem[] {
    return items.filter(item => item.group === group);
  }

}
