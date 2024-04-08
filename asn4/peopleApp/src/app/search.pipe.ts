import { query } from '@angular/animations';
import { Pipe, PipeTransform } from '@angular/core';
import { Person } from './person-class/person-class';

@Pipe({
  name: 'search'
})
export class SearchPipe implements PipeTransform {

  transform(people: Person[], querystring:string): Person[] {
    return people.filter(p=>{
      return p.reporter.toLowerCase().includes(querystring.toLowerCase())
    });
  }

}
