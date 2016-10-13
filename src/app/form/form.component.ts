import { Component, OnInit } from '@angular/core';
import { CitibikeService} from '../citibike.service';
import { Addresses } from '../addresses';
import { Transmethod } from '../transmethod';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {

  startAddress: string = "70 Maujer, Brooklyn";
  endAddress: string = "455 Broadway, New York";
  addresses: Addresses;
  errorMessage: any;
  transmethods: Transmethod[];

  constructor(
    private citibikeService: CitibikeService
  ) { }

  ngOnInit() {
  }

  submit() {
  console.log("You clicked submit!");

  this.citibikeService.getAddress(this.startAddress, this.endAddress)
    .then(
      res =>{
        console.log(res)
        this.addresses = res;
        this.startAddress = this.addresses.start;
        this.endAddress = this.addresses.end;
      }, error => this.errorMessage = <any>error
    );
  }
  calculateRouteTime() {
    console.log("You clicked calculate!");
    this.citibikeService.getTravelTimes(this.addresses)
      .then(
        res =>{
          console.log(JSON.stringify(res));
          this.transmethods = res;
          // this.citibikeTotalTime = 0;
          // console.log("Trying to resolve the promise in the geocode component for calculate!");
          // // console.log(res);
          // // console.log(res[0]);
          // this.walking = res[0];
          // this.bicycling = res[1];
          // this.driving = res[2];
          // this.travelcards = res.slice(3);
          // for (let tc of this.travelcards) {
          //     this.citibikeTotalTime+=tc.time;
          // }
          // this.citibikeTotalTimeString = "Total time is " + Math.floor(this.citibikeTotalTime/60) + " minutes and " + this.citibikeTotalTime%60 + " seconds ";
          // console.log(res);
          // this.travelcard = res[0];
          // this.citibikeTime = this.travelcard.timeString;
          // this.responseObject = JSON.parse(res);
          // this.citibikeTime = res.totaltime;

        }, error => this.errorMessage = <any>error
      );

  }

}
