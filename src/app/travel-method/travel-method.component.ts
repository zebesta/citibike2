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
  totalTime: number =0;
  totalTimeString: string;
  columnClass: string = "col-lg-4";

  @Input() input: Transmethod;

  constructor() { }

  ngOnInit() {
    console.log(JSON.stringify(this.input.travelCards));
    for(let t of this.input.travelCards){
      this.totalTime += t.time;
    }
    this.totalTimeString = this.formatTime(this.totalTime);
  }
  goToMap(tc: Travelcard){
    // TODO: fix this! a jank way to toggle the view and refresh the child component
    this.showMap = !this.showMap;
    this.selectedTc = tc;
    //resize component column size based on if map is shown or not
    if(this.showMap){
      this.columnClass = "col-lg-12";
    }else{
      this.columnClass = "col-lg-4";
    }
    // this.showMap = true;
    console.log(tc.type);
  }

  formatTime(time: number){
    var hours: number = Math.floor(time/60/60);
    var minutes: number = Math.floor((time/60)%60);
    var seconds: number = time%60;
    var timeString: string  = "Total time is " + Math.floor(time/60) + " minutes and " + time%60 + " seconds";
    if(hours){
      timeString = "Total time is " + hours + " hours, " + minutes + " minutes and " + seconds + " seconds";
    }
    return timeString;
  };

}
