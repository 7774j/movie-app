import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeNewReleasesComponent } from './home-new-releases/home-new-releases.component';
import { TrendingComponent } from './trending/trending.component';
import { BoxOfficeComponent } from './box-office/box-office.component';
import { ViewFinderComponent } from './view-finder/view-finder.component';

const routes: Routes = [
  {path: '', component: HomeNewReleasesComponent},
  {path: 'home-new-releases', component: HomeNewReleasesComponent},
  {path: 'trending', component: TrendingComponent},
  {path: 'box-office', component: BoxOfficeComponent},
  {path: 'view-finder', component: ViewFinderComponent},
  {
    path: 'auth', loadChildren: () => import('./auth/auth.module')
      .then(mod => mod.AuthModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
