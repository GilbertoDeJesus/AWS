import { Component, OnInit } from '@angular/core';
import * as L from 'leaflet';

@Component({
  selector: 'app-leaflet-maps',
  templateUrl: './leaflet-maps.component.html',
  styleUrls: ['./leaflet-maps.component.css']
})
export class LeafletMapsComponent implements OnInit {
  private map;
  private marker;
  constructor() { }

  ngOnInit(): void {
    this.initMap();
    this.getMarker();
  }

  private initMap() {
    this.map = L.map('mapid').setView([18.4625, -97.3928], 13);

    L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token=pk.eyJ1IjoiZ2FkanMiLCJhIjoiY2tnc2ZqY282MHpvNzJ6cjM5ZHdwMTBjMyJ9.Jz6OaN1nNGAZiQzSET-8vg', {
      attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
      maxZoom: 18,
      id: 'mapbox/streets-v11',
      tileSize: 512,
      zoomOffset: -1,
      accessToken: 'pk.eyJ1IjoiZ2FkanMiLCJhIjoiY2tnc2ZqY282MHpvNzJ6cjM5ZHdwMTBjMyJ9.Jz6OaN1nNGAZiQzSET-8vg'
    }).addTo(this.map);

  }

  private getMarker() {
    this.map.on('click', (e) => {
      this.marker = L.marker([e.latlng.lat, e.latlng.lng], {
        icon: L.icon({
          iconUrl: 'leaflet/marker-icon.png',
          shadowUrl: 'leaflet/marker-shadow.png'
        })
      }).setLatLng(e.latlng).addTo(this.map);
      this.marker.bindPopup("<b>Latitud: </b>" + e.latlng.lat + "<br><b>Longitud: </b>" + e.latlng.lng).openPopup();
      console.log(e.latlng);

    })
  }

}
