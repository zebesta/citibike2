import { Component, OnInit, Input } from '@angular/core';
import { Travelcard } from '../travelcard';
declare var google: any;

@Component({
  selector: 'app-maps-raw',
  templateUrl: './maps-raw.component.html',
  styleUrls: ['./maps-raw.component.css']
})
export class MapsRawComponent implements OnInit {
  startLat: number;
  startLng: number;
  endLat: number;
  endLng: number;
  centerLat: number;
  centerLng: number;
  zoom: number = 12;

  @Input() tc: Travelcard;

  constructor() { }

  ngOnInit() {
    var directionsService = new google.maps.DirectionsService;
    var directionsDisplay = new google.maps.DirectionsRenderer;

    var mapProp = {
            center: new google.maps.LatLng(this.tc.startLocLat, this.tc.startLocLng),
            zoom: 12,
            mapTypeId: google.maps.MapTypeId.ROADMAP
        };
        var map = new google.maps.Map(document.getElementById("googleMap"), mapProp);
        directionsDisplay.setMap(map);

        var startLoc = {lat: this.tc.startLocLat, lng: this.tc.startLocLng};
        var endLoc = {lat: this.tc.endLocLat, lng: this.tc.endLocLng};
        // var startMarker = new google.maps.Marker({
        //   position: startLoc,
        //   map: map
        // });
        // var endMarker = new google.maps.Marker({
        //   position: endLoc,
        //   map: map
        // });

        directionsService.route({
          origin: this.tc.startLoc,
          destination: this.tc.endLoc,
          travelMode: 'DRIVING'
        }, function(response, status) {
          if (status === 'OK') {
            directionsDisplay.setDirections(response);
          } else {
            window.alert('Directions request failed due to ' + status);
          }
        });


        // function calculateAndDisplayRoute(directionsService, directionsDisplay) {
        // directionsService.route({
        //   origin: document.getElementById('start').value,
        //   destination: document.getElementById('end').value,
        //   travelMode: this.tc.type
        // }, function(response, status) {
        //   if (status === 'OK') {
        //     directionsDisplay.setDirections(response);
        //   } else {
        //     window.alert('Directions request failed due to ' + status);
        //   }
        // });
  }

}
