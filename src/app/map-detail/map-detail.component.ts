import { Component, OnInit } from '@angular/core';
import { CitibikeService } from '../citibike.service';
import { Router } from '@angular/router';

//object definitions
import { Transmethod } from '../transmethod';
import { Travelcard } from '../travelcard';

@Component({
  selector: 'app-map-detail',
  templateUrl: './map-detail.component.html',
  styleUrls: ['./map-detail.component.css']
})
export class MapDetailComponent implements OnInit {
  tm: Transmethod

  constructor(
    private citibikeService: CitibikeService,
    private router: Router
  ) { }

  ngOnInit() {
    this.tm = this.citibikeService.getTm();

    //if there is no information, send user back to the forms page
    if(!this.tm){
      let link = ['form'];
      this.router.navigate(link);
    }
  }

}
