import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeNewReleasesComponent } from './home-new-releases/home-new-releases.component';
import { BoxOfficeComponent } from './box-office/box-office.component';
import { TrendingComponent } from './trending/trending.component';
import { ViewFinderComponent } from './view-finder/view-finder.component';
import { HeaderComponent } from './header/header.component';
import { HttpClientModule } from '@angular/common/http';
import { StreamingComponent } from './streaming/streaming.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { UserAccountsComponent } from './auth/user-accounts/user-accounts.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeNewReleasesComponent,
    BoxOfficeComponent,
    TrendingComponent,
    ViewFinderComponent,
    HeaderComponent,
    StreamingComponent,
    UserAccountsComponent



  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
