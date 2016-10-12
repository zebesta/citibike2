import { Component, OnInit } from '@angular/core';
import { CitibikeService} from '../citibike.service';
import { Addresses } from '../addresses';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {

  startAddress: string = "start";
  endAddress: string = "end";
  addresses: Addresses;
  errorMessage: any;

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

}
