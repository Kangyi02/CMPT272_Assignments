import { Injectable } from '@angular/core';
import { Person } from './person-class/person-class';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})

export class PeopleService {
  people!: Person[]
  location!: Location
  constructor(private http: HttpClient) {
    // call to the backend db
    this.people = [
      {
        reporter: "Katie",
        phoneNumber: 11234567890,
        baddieName: "Mischief Maximus",
        location: "SFU",
        latitude: 49.2781,
        longtitude: -122.9199,
        picture: "assets/img/m1.png",
        detail: "He is sliming the child!",
        time: new Date().getTime(),
        status: true    
      },
      {
        reporter: "Bobby",
        phoneNumber: 1234567890,
        baddieName: "Dr. Jiggles",
        location: "Metrotown",
        latitude: 49.2276,
        longtitude: -123.0076,
        picture: "assets/img/m1.png",
        detail: "He is sliming the child!",
        time: new Date().getTime(),
        status: false
      },
      {
        reporter: "Ayu",
        phoneNumber: 1234567890,
        baddieName: "Sable Serpent",
        location: "Stanly Park",
        latitude: 49.300054,
        longtitude: -123.148155,
        picture: "assets/img/m1.png",
        detail: "He is sliming the child!",
        time: new Date().getTime(),
        status: true
      },
      {
        reporter: "Mike",
        phoneNumber: 1234567890,
        baddieName: "Sable Serpent",
        location: "SFU",
        latitude: 49.2781,
        longtitude: -122.9199,
        picture: "assets/img/m1.png",
        detail: "He is sliming the child!",
        time: new Date().getTime(),
        status: true
      }
    ]

    // for (let p of this.people) {
    //   this.http.post('https://272.selfip.net/apps/p4s8WfKVZP/collections/data1/documents/',
    //     {
    //       "key": p.reporter.toString(),
    //       "data": JSON.stringify(p)
    //     }).subscribe(
    //       (data: any) => {
    //     var rows = <Array<any>>data;
    //     console.log(rows[0].key);
    //     console.log(rows[0].data);
    //       })
    // }
  }

  ngOnInit(): void {
    this.get()
    this.http.get('https://272.selfip.net/apps/p4s8WfKVZP/collections/data1/documents/')
      .subscribe((data) => {
        console.log(data)
        var rows = <Array<any>>data;
        if (rows.length > 0) {
          console.log('First row key:', rows[0].key);
          console.log('First row data:', rows[0].data);
        } else {
          console.log('No data found');
        }
      
      })
  }

  get() {
    return this.people
    console.log(this.people)
  }

  add(newPerson: Person) {
    newPerson.time = (new Date()).getTime()
    this.people.push(newPerson)
    console.log(this.people)
    this.http.post('https://272.selfip.net/apps/p4s8WfKVZP/collections/data1/documents/',
      {
        "key": newPerson.reporter.toString(),
        "data": JSON.stringify(newPerson)
      }).subscribe(
        (data: any) => {
          console.log(data);
        })
  }

  delete(del_person: string) {
    this.http.delete('https://272.selfip.net/apps/p4s8WfKVZP/collections/data1/documents/' + del_person)
    .subscribe(
    );
    this.people = this.people.filter(p => p.reporter !== del_person)
    return this.people
  }

  updateInfo(reporter: string, updatedPerson: Person) {
    this.people = this.people.filter(p => p.reporter !== reporter)
    updatedPerson.time = (new Date()).getTime()
    this.people.push(updatedPerson)
    this.http.put(`https://272.selfip.net/apps/p4s8WfKVZP/collections/data1/documents/${reporter}`, 
    { 
      "key":reporter.toString(),
      "data": updatedPerson }) // Assuming your backend expects the 'data' key
    .subscribe(
      response => {
        console.log('Update successful:', response);
        // Handle successful update here
      },
      error => {
        console.error('Update failed:', error);
        // Handle error here
        // Optionally, revert the local changes if the update fails
      }
    );

  }

  getPerson(reporter: string): Person | undefined {
    return this.people.find(p => p.reporter === reporter)
  }
}
