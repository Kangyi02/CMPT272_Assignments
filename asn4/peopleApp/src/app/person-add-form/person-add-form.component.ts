import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, ValidatorFn, AbstractControl, ValidationErrors } from '@angular/forms';
import { PeopleService } from '../people.service';
import { Router } from '@angular/router';
import { Person } from '../person-class/person-class';

@Component({
  selector: 'app-person-add-form',
  templateUrl: './person-add-form.component.html',
  styleUrls: ['./person-add-form.component.css']
})

export class PersonAddFormComponent {
  form: FormGroup
  people!: Person[]

  constructor(private ps: PeopleService, private router: Router) { // 
    let formControls = {
      reporter: new FormControl('',
        [Validators.required,
        Validators.minLength(1),
        this.forbiddenNameValidator as ValidatorFn
        ]),
      phoneNumber: new FormControl('',
        [Validators.required,
        Validators.minLength(10),
        Validators.maxLength(10),
        this.onlyNumbersValidator
        ]),
      baddieName: new FormControl('',
        [Validators.required,
        Validators.maxLength(20)
        ]),
      location: new FormControl('',
        [Validators.required,
        Validators.maxLength(30)
        ]),
      longtitude: new FormControl('',
        [Validators.required,
        Validators.maxLength(10)
        ]),
      latitude: new FormControl('',
        [Validators.required,
        Validators.maxLength(10)
        ]),
      picture: new FormControl('',
        [Validators.required
          //Validators.minLength(4)
        ]),
      detail: new FormControl('',
        [Validators.required,
        Validators.maxLength(20)
        ]),
      // status: new FormControl('',
      //   [Validators.required,
      //   Validators.minLength(4)
      //   ])
    }
    this.form = new FormGroup(formControls) //, {validators: [this.formValidator]})
  }

  // formValidator: ValidatorFn = (control: AbstractControl): ValidationErrors | null => {
  //   const reporter = control.get("reporter")
  //   const ins = control.get("status")
  //   const valid_names = ['bobby', 'steve', 'mary']
  //   return null
  //   // return valid_names.includes(reporter?.value.trim()) && (ins!.value) || ins!.value?
  //   //       null:{ form_error:true}
  // }

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

  onSubmit(newPerson: Person) {
    this.ps.add(newPerson)
    this.router.navigate(["/people"])
  }

  locationList: string[] = ["Metrotown", "SFU", "Stanly Park", "UBC"];
  ngOnInit() {
    this.getLocations();
  }

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