import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class WeatherForecastService {

  constructor(private http: HttpClient) { }

  getWeatherForecast(){
    return this.http.get(
      'http://api.openweathermap.org/data/2.5/weather?q=Tehuacan&appid=f5d96de626d173131890e49737cb1b51'
    );
  }
}
