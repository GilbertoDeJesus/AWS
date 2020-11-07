import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';
import { PageOneComponent } from './page-one/page-one.component';
import { PageTwoComponent } from './page-two/page-two.component';
import { MainComponent } from './main/main.component';
import { NotFoundComponent } from './not-found/not-found.component';

import { HttpClientModule } from '@angular/common/http';
import { GetServiceComponent } from './get-service/get-service.component';
import { QuoteDetailComponent } from './quote-detail/quote-detail.component';
import { WeatherForecastComponent } from './weather-forecast/weather-forecast.component';
import { FormsModule } from '@angular/forms';
import { HeroFormComponent } from './hero-form/hero-form.component';
import { WeatherWithFormsComponent } from './weather-with-forms/weather-with-forms.component';
import { LeafletMapsComponent } from './leaflet-maps/leaflet-maps.component';
import { WeatherForecastByLtLngComponent } from './weather-forecast-by-lt-lng/weather-forecast-by-lt-lng.component';
import { AngularFireModule } from '@angular/fire';
import { FirebaseCRUDComponent } from './firebase-crud/firebase-crud.component';
import { AngularFireDatabaseModule } from '@angular/fire/database';


const firebaseConfig = {
  apiKey: "AIzaSyD_Lbyx0tTkirB2c7m6-041VIE4u10nHuE",
  authDomain: "proyectoaws-60728.firebaseapp.com",
  databaseURL: "https://proyectoaws-60728.firebaseio.com",
  projectId: "proyectoaws-60728",
  storageBucket: "proyectoaws-60728.appspot.com",
  messagingSenderId: "532515280511",
  appId: "1:532515280511:web:e93fee718abbb1c213514a",
  measurementId: "G-N5BKBWRYR6"
};

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    PageOneComponent,
    PageTwoComponent,
    MainComponent,
    NotFoundComponent,
    GetServiceComponent,
    QuoteDetailComponent,
    WeatherForecastComponent,
    HeroFormComponent,
    WeatherWithFormsComponent,
    LeafletMapsComponent,
    WeatherForecastByLtLngComponent,
    FirebaseCRUDComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFireDatabaseModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
