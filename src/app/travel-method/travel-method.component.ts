import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-travel-method',
  templateUrl: './travel-method.component.html',
  styleUrls: ['./travel-method.component.css']
})
export class TravelMethodComponent implements OnInit {

  @Input() input: number;

  constructor() { }

  ngOnInit() {
  }

}
