import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'unique'
})
export class UniquePipe implements PipeTransform {
  transform(value: any[], attribute: string): any[] {
    if (!Array.isArray(value)) {
      return value;
    }
    const uniqueValues = new Set();
    const uniqueObjects: any[] = [];
    value.forEach(item => {
      const attrValue = item[attribute];
      if (!uniqueValues.has(attrValue)) {
        uniqueValues.add(attrValue);
        uniqueObjects.push(item);
      }
    });
    return uniqueObjects;
  }
}
