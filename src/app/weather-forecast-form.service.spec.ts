import { TestBed } from '@angular/core/testing';

import { WeatherForecastFormService } from './weather-forecast-form.service';

describe('WeatherForecastFormService', () => {
  let service: WeatherForecastFormService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(WeatherForecastFormService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
