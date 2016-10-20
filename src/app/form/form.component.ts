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

  startAddress: string;
  endAddress: string;
  addresses: Addresses;
  errorMessage: any;
  transmethods: Transmethod[];

  constructor(
    private citibikeService: CitibikeService
  ) { }

  ngOnInit() {
  }


  getLocation(){
    // position: any;
    console.log("Getting location!");
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(showPosition.bind(this));
    }else{
      console.log("Location not allowed!");
    }
    function showPosition(position) {
        console.log("Latitude: " + position.coords.latitude);
        console.log("Longitude: " + position.coords.longitude);
        this.startAddress = position.coords.latitude + ", " + position.coords.longitude;
        this.getLocationCoded();
    }
  }

  setStartAddress(lat, lng){
    this.startAddress = "" + lat + ", " + lng;
  }
  getLocationCoded(){
    this.citibikeService.getLocation(this.startAddress)
      .then(res=>{
        console.log("OMG RESPONSE FOR GET LOC CODED");
        console.log(res);
        // this.addresses.start = res;
        this.startAddress = res.start;
      })
      .catch(error=>{
        this.errorMessage =<any>error
      });
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
        }, error => this.errorMessage = <any>error
      );

  }

}
