import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WeatherForecastByLtLngComponent } from './weather-forecast-by-lt-lng.component';

describe('WeatherForecastByLtLngComponent', () => {
  let component: WeatherForecastByLtLngComponent;
  let fixture: ComponentFixture<WeatherForecastByLtLngComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WeatherForecastByLtLngComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WeatherForecastByLtLngComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
