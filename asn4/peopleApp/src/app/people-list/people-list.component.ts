import { Component, OnInit } from '@angular/core';
import { PeopleService } from '../people.service';
import { Person } from '../person-class/person-class';
import { Router } from '@angular/router';

@Component({
  selector: 'app-people-list',
  templateUrl: './people-list.component.html',
  styleUrls: ['./people-list.component.css']
})
export class PeopleListComponent implements OnInit{
  people!: Person[] 
  query:string
  constructor(private ps:PeopleService, private router: Router) {
    this.query= ''
    this.people= []
    
  }

  onPersonDelete(evt:{person_name:string}) {
    let del_per_name = evt.person_name
    //this.people = this.people.filter((p:{name:string})=> p.name!=del_per_name)
    //console.log(`person ${evt.person_name} just deleted!`)
    this.people=this.ps.delete(del_per_name)
  }

  ngOnInit(): void {
    this.people=this.ps.get()
    this.sortTable('location');
  }
  
  //// !!!
  sortTable(column: keyof Person) {
    //console.log(`Sorting by ${column}`);
    this.people=this.people.sort((a, b) => {
      if (a[column] < b[column]) {
        return -1;
      }
      if (a[column] > b[column]) {
        return 1;
      }
      return 0;
    });
    return this.people
  }
  
}
