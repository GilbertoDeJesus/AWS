import { Component, OnInit } from '@angular/core';
import { Forecast } from '../forecast';
import { WeatherForecastFormService } from '../weather-forecast-form.service';
import { WeatherForm } from '../weather-form';

@Component({
  selector: 'app-weather-with-forms',
  templateUrl: './weather-with-forms.component.html',
  styleUrls: ['./weather-with-forms.component.css']
})
export class WeatherWithFormsComponent implements OnInit {
  weatherForecastForm: Forecast [] = [];
  weatherObj = new WeatherForm(null,null);
  constructor( private weatherForecastFormService: WeatherForecastFormService) { }

  ngOnInit(): void {
    this.submit();
  }

  getWeatherForecast() {
    if (this.weatherObj.lat === null && this.weatherObj.lon === null) {
      console.log('Nothing');
    }else{
      this.weatherForecastFormService.getWeatherForecast(this.weatherObj.lat, this.weatherObj.lon).subscribe((response: any) => {
        this.weatherForecastForm = response.weather;
        console.log(this.weatherForecastForm)
      });
    }

  }
  submit(){
    this.getWeatherForecast();
  }

}
