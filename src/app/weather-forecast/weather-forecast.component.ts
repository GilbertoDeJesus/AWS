import { Component, OnInit } from '@angular/core';
import { Forecast } from '../forecast';
import { WeatherForecastService } from '../weather-forecast.service';

@Component({
  selector: 'app-weather-forecast',
  templateUrl: './weather-forecast.component.html',
  styleUrls: ['./weather-forecast.component.css'],
})
export class WeatherForecastComponent implements OnInit {
  weatherForecast: Forecast [] = [];
  constructor(private weatherForecastService: WeatherForecastService) {}

  ngOnInit(): void {
    this.getWeatherForecast();
  }

  getWeatherForecast() {
    this.weatherForecastService.getWeatherForecast().subscribe((response: any) => {
        this.weatherForecast = response.weather;
        console.log(this.weatherForecast)
      });
  }
}
