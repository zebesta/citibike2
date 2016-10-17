import { Component, OnInit, Input } from '@angular/core';
import { Travelcard } from '../travelcard';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css']
})
export class MapComponent implements OnInit {
  title: string = 'My first angular2-google-maps project';
  startLat: number;
  startLng: number;
  endLat: number;
  endLng: number;
  centerLat: number;
  centerLng: number;
  zoom: number = 12;

  @Input() tc: Travelcard;



  constructor() {}

  ngOnInit() {
    this.startLat = this.tc.startLocLat;
    this.startLng = this.tc.startLocLng;
    this.endLat = this.tc.endLocLat;
    this.endLng = this.tc.endLocLng;

    //find center
    this.centerLat = (this.startLat + this.endLat)/2;
    this.centerLng = (this.startLng + this.endLng)/2;
    console.log("Centered: " + this.centerLat + ", " + this.centerLng)
  }

}
