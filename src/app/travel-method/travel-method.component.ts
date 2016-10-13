import { Component, OnInit, Input } from '@angular/core';
import { Transmethod} from '../transmethod';
import { Travelcard } from '../travelcard';

@Component({
  selector: 'app-travel-method',
  templateUrl: './travel-method.component.html',
  styleUrls: ['./travel-method.component.css']
})
export class TravelMethodComponent implements OnInit {

  @Input() input: Transmethod;

  constructor() { }

  ngOnInit() {
    console.log(JSON.stringify(this.input.travelCards));
  }
  goToMap(tc: Travelcard){
    console.log(tc.type);
  }

}
