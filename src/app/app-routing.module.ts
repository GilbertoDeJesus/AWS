import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { GetServiceComponent } from './get-service/get-service.component';
import { HeroFormComponent } from './hero-form/hero-form.component';
import { MainComponent } from './main/main.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { PageOneComponent } from './page-one/page-one.component';
import { PageTwoComponent } from './page-two/page-two.component';
import { QuoteDetailComponent } from './quote-detail/quote-detail.component';
import { WeatherForecastComponent } from './weather-forecast/weather-forecast.component';

const routes: Routes = [
  { path: '', redirectTo: 'main', pathMatch: 'full'},
  { path: 'main', component: MainComponent},
  { path: 'pageone', component: PageOneComponent },
  { path: 'pagetwo', component: PageTwoComponent},
  { path: 'getservice', component: GetServiceComponent},
  { path: 'weatherforecast', component: WeatherForecastComponent},
  { path: 'quotedetail/:id', component: QuoteDetailComponent},
  { path: 'heroform', component: HeroFormComponent},
  { path: '**', component: NotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
