import { Component, OnInit } from '@angular/core';
import * as L from 'leaflet';
import { PeopleService } from '../people.service';
import { Person } from '../person-class/person-class';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css']
})

export class MapComponent implements OnInit {
  private map!: L.Map
  people!: Person[]
  constructor(private ps: PeopleService) {
    this.people = this.ps.get()
  }

  ngOnInit(): void {
    this.showMap()
    this.putLabels()
    this.showClick()
  }

  showMap() {
    this.map = L.map('mapId').setView([49.28, -123], 11);

    const tiles = L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
      maxZoom: 19,
      attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> ',

    }).addTo(this.map);
    this.putLabels()
  }

  putLabels() {

    for (let p of this.people) {
      var countLocation = 0;

      for (let e of this.people) {
        if (p.location === e.location) {
          countLocation++;
        }
      }

      L.marker([p.latitude, p.longtitude]).addTo(this.map)
        .bindPopup("<b>" + p.location + "</b><br/>" + countLocation + " nuisance reports")
    }
  }

  showClick() {
    this.map.on('click', (e) => {
      alert("Latitude & Longtitude:" + e.latlng)
    });
  }

}
