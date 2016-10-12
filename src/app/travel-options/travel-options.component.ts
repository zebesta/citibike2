import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-travel-options',
  templateUrl: './travel-options.component.html',
  styleUrls: ['./travel-options.component.css']
})
export class TravelOptionsComponent implements OnInit {

  heroes = [1,2,3,4,5];

  constructor() { }

  ngOnInit() {
  }

}
