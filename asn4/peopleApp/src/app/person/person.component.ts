import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Router } from '@angular/router';
import { Person } from '../person-class/person-class';
import { PeopleService } from '../people.service';

@Component({
  selector: 'app-person',
  templateUrl: './person.component.html',
  styleUrls: ['./person.component.css']
})

export class PersonComponent {
  @Input() person!: Person
  @Output() delete = new EventEmitter()

  people!: Person[]
  query:string

  constructor(private router: Router, private ps: PeopleService) {
    this.people = []
    this.query=''
  }

  ngOnInit(): void {
    this.people=this.ps.get()
  }
  
  showPasswordDialog = false;
  enteredPassword = '';

  onDelete(evt: any, person_name: string) {
    this.openPasswordDialog()
    if (this.showPasswordDialog)
    {
      if (this.enteredPassword === "fcab0453879a2b2281bc5073e3f5fe54") 
      {
        evt["person_name"] = person_name
        console.log(evt)
        this.delete.emit(evt)    
      }
      else 
      {
        alert('Incorrect password');
      }
    } 
  }

  onView() {
    this.router.navigate(["/person", this.person.reporter])
  }

  openPasswordDialog() {
    this.showPasswordDialog = true;
  }

  cancelPassword() {
    this.showPasswordDialog = false;
    this.enteredPassword = '';
  }

}
