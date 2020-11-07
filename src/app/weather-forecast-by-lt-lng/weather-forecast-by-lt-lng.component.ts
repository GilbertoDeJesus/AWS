import { Component, OnInit } from '@angular/core';
import { Forecast } from '../forecast';
import { WeatherForecastFormService } from '../weather-forecast-form.service';
import { WeatherForm } from '../weather-form';
import * as L from 'leaflet';

@Component({
  selector: 'app-weather-forecast-by-lt-lng',
  templateUrl: './weather-forecast-by-lt-lng.component.html',
  styleUrls: ['./weather-forecast-by-lt-lng.component.css']
})
export class WeatherForecastByLtLngComponent implements OnInit {

  weatherForecastForm: Forecast[] = [];
  weatherObj = new WeatherForm(null, null);
  private map;
  private marker;

  constructor(private weatherForecastFormService: WeatherForecastFormService) { }

  ngOnInit(): void {
    this.submit();
    this.initMap();
    this.getMarker();
  }

  getWeatherForecast() {
    if (this.weatherObj.lat === null && this.weatherObj.lon === null) {
      console.log('Nothing');
    } else {
      this.weatherForecastFormService.getWeatherForecast(this.weatherObj.lat, this.weatherObj.lon).subscribe((response: any) => {
        this.weatherForecastForm = response.weather;
        console.log(this.weatherForecastForm)
      });
    }

  }
  submit() {
    this.getWeatherForecast();
  }

  private initMap() {
    this.map = L.map('mapid').setView([19.0413, -98.2062], 13);

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
      this.weatherObj = new WeatherForm(e.latlng.lat, e.latlng.lng);
      console.log(e.latlng);

    })
  }

}
