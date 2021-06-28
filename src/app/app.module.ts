import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeNewReleasesComponent } from './home-new-releases/home-new-releases.component';
import { BoxOfficeComponent } from './box-office/box-office.component';
import { TrendingComponent } from './trending/trending.component';
import { ViewFinderComponent } from './view-finder/view-finder.component';
import { HeaderComponent } from './header/header.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeNewReleasesComponent,
    BoxOfficeComponent,
    TrendingComponent,
    ViewFinderComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
