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

  startAddress: string = "618 Grand St, Brooklyn";
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
        }, error => this.errorMessage = <any>error
      );

  }

}
