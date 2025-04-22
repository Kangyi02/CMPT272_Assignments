import { Pipe, PipeTransform } from '@angular/core';
import { Person } from './person-class/person-class';

@Pipe({
  name: 'countPeople'
})
export class CountPeoplePipe implements PipeTransform {

  transform(people: Person[]): number {
    return people.length;
  }

}
