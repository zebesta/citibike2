import { Component, OnInit, Input } from '@angular/core';
import { Transmethod} from '../transmethod';
import { Travelcard } from '../travelcard';

@Component({
  selector: 'app-travel-method',
  templateUrl: './travel-method.component.html',
  styleUrls: ['./travel-method.component.css']
})
export class TravelMethodComponent implements OnInit {
  showMap: boolean = false;
  selectedTc: Travelcard;

  @Input() input: Transmethod;

  constructor() { }

  ngOnInit() {
    console.log(JSON.stringify(this.input.travelCards));
  }
  goToMap(tc: Travelcard){
    // TODO: fix this! a jank way to toggle the view and refresh the child component
    this.showMap = !this.showMap;
    this.selectedTc = tc;
    // this.showMap = true;
    console.log(tc.type);
  }

}
