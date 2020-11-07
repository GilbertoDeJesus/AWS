import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WeatherWithFormsComponent } from './weather-with-forms.component';

describe('WeatherWithFormsComponent', () => {
  let component: WeatherWithFormsComponent;
  let fixture: ComponentFixture<WeatherWithFormsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WeatherWithFormsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WeatherWithFormsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
