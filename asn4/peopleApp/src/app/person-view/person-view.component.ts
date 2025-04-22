import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Person } from '../person-class/person-class';
import { PeopleService } from '../people.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-person-view',
  templateUrl: './person-view.component.html',
  styleUrls: ['./person-view.component.css']
})
export class PersonViewComponent implements OnInit {
  person!: Person
  rName: string = this.ActivatedRoute.snapshot.params['reportName']

  constructor(private ActivatedRoute: ActivatedRoute,
              private PeopleService: PeopleService,
              private router: Router) {  // add edit or sth
  }

  ngOnInit(): void {
    this.person = this.PeopleService.getPerson(this.rName)!
  }

  onBack() {
    this.router.navigate(["/people"])
  }

  onEdit() {
    this.router.navigate(["person", this.person.reporter, "edit"])
  }
  
  showPasswordDialog = false;
  enteredPassword = '';
  showModifyDialog = false;

  openPasswordDialog() {
    this.showPasswordDialog = true;
  }

  confirmPassword() {
    if (this.enteredPassword === 'fcab0453879a2b2281bc5073e3f5fe54') {
      this.modifyStatus();
    } else {
      alert('Incorrect password');
    }
    this.showPasswordDialog = false;
    this.enteredPassword = '';
  }

  cancelPassword() {
    this.showPasswordDialog = false;
    this.enteredPassword = '';
  }

  modifyStatus() {
    this.showModifyDialog = true;
  }

  cancelModify() {
    this.showModifyDialog = false;
  }

  enteredStatus = ''
  submitStatus() {
    if (this.enteredStatus) {
      this.person.status = true
      this.showModifyDialog = false;
      this.PeopleService.updateInfo(this.person.reporter, this.person)
    }
  }

}
