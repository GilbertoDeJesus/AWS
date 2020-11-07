import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { WeatherForm } from './weather-form';

@Injectable({
  providedIn: 'root'
})
export class WeatherForecastFormService {

  constructor(private http: HttpClient) { }

  getWeatherForecast(lat:number, lon:number){
    return this.http.get(
      'http://api.openweathermap.org/data/2.5/weather?lat='+lat+'&lon='+lon+'&appid=f5d96de626d173131890e49737cb1b51'
    );
  }

}
