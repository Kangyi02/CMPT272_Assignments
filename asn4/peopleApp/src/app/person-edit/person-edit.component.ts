import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Person } from '../person-class/person-class';
import { PeopleService } from '../people.service';
import { Router } from '@angular/router';
import { FormGroup, FormControl, FormBuilder, Validators, ValidatorFn, AbstractControl, ValidationErrors, Form } from '@angular/forms';

@Component({
  selector: 'app-person-edit',
  templateUrl: './person-edit.component.html',
  styleUrls: ['./person-edit.component.css']
})

export class PersonEditComponent implements OnInit {
  form: FormGroup
  person!: Person
  people!: Person[]
  rName: string = this.ActivatedRoute.snapshot.params['reportName']
  constructor(private ActivatedRoute: ActivatedRoute,
    private ps: PeopleService,
    private router: Router,
    private fb: FormBuilder) {

    this.person = this.ps.getPerson(this.rName)!
    this.form = this.fb.group({
      reporter: [this.person.reporter, [Validators.required,
      Validators.minLength(1),
      this.forbiddenNameValidator as ValidatorFn
      ]],
      phoneNumber: [this.person.phoneNumber, [Validators.required,
        Validators.minLength(10),
        Validators.maxLength(10),
        this.onlyNumbersValidator
        ]],
      baddieName: [this.person.baddieName,
        [Validators.required,
        Validators.maxLength(20)
        ]],
      location: [this.person.location,
        [Validators.required,
        Validators.maxLength(20)
        ]],
      longtitude: [this.person.longtitude,
        [Validators.required,
        Validators.maxLength(10)
        ]],
      latitude: [this.person.latitude,
        [Validators.required,
        Validators.maxLength(10)
        ]],
      picture: [this.person.picture, [Validators.required,
        Validators.minLength(4)
      ]],
      detail: [this.person.detail,
        [Validators.required,
        Validators.minLength(2)
        ]],
      status: [this.person.status],
    });
  }

  ngOnInit(): void {
    this.person = this.ps.getPerson(this.rName)!
    this.getLocations();
  }

  forbiddenNameValidator(control: FormControl) {
    var invalid_names = ['stupid', 'freak', 'hell', 'fuck', 'dame']
    if (invalid_names.includes(control.value.trim())) {
      return {
        name_error: "You name cannot be " + control.value.trim()
      }
    }
    else {
      return null
    }
  }

  onlyNumbersValidator(control: FormControl): { [key: string]: any } | null {
    var isNumeric = /^[0-9]*$/.test(control.value);
    return isNumeric ? null : { 'nonNumeric': true };
  }

  onBackInfo(newPerson: Person) {
    this.ps.updateInfo(newPerson.reporter, newPerson)
    this.router.navigate(["person", newPerson.reporter])
    
  }

  locationList: string[] = ["Metrotown", "SFU", "Stanly Park", "UBC"];
  getLocations() {
    this.people = this.ps.get()
    for (let p of this.people) {
      if (!this.locationList.includes(p.location)) {
        this.locationList.push(p.location);
      }
    }
    return this.locationList
  }

}



