import { Component, OnInit, Input, trigger, state, style, animate, transition } from '@angular/core';
import { Transmethod} from '../transmethod';
import { Travelcard } from '../travelcard';
import { CitibikeService } from '../citibike.service';
import { Router } from '@angular/router'

@Component({
  selector: 'app-travel-method',
  templateUrl: './travel-method.component.html',
  styleUrls: ['./travel-method.component.css'],
  animations: [
    trigger('flyInOut', [
      state('in', style({transform: 'translateY(0)', opacity: 1})),
      transition('void => *', [
        style({transform: 'translateY(100%)', opacity: 0}),
        animate(300)
      ]),
      transition('* => void', [
        animate(300, style({transform: 'translateY(-100%)', opacity: 0}))
      ])
    ])
  ]
})
export class TravelMethodComponent implements OnInit {
  showMap: boolean = false;
  selectedTc: Travelcard;
  totalTime: number =0;
  totalTimeString: string;
  large: string = "col-xs-12 col-sm-12 col-md-12 col-lg-12";
  small: string = "col-xs-12 col-sm-12 col-md-6 col-lg-6";
  columnClass: string = this.small;

  @Input() input: Transmethod;

  constructor(
    private citibikeService: CitibikeService,
    private router: Router
  ) { }

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
      this.columnClass = this.large;
    }else{
      this.columnClass = this.small;
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
  animationStarted(event){
    console.log("ANIMATION STARTED!");
  }
  animationDone(event){
    console.log("ANIMATION DONE!");
  }

  mapDetail(tm){
    console.log("In Map detail!!!!");
    this.citibikeService.setTm(tm);
    let link = ['map'];
    this.router.navigate(link);
  }

}
