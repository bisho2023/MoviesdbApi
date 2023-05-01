import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { MoviesComponent } from './movies/movies.component';
import { TvComponent } from './tv/tv.component';
import { NetworkComponent } from './network/network.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { NotfoundComponent } from './notfound/notfound.component';
import { PeopleComponent } from './people/people.component';
import { AuthGuard } from './auth.guard';
import { MoviedetailsComponent } from './moviedetails/moviedetails.component';

const routes: Routes = [
  // {path:'' ,redirectTo:'home', pathMatch:'full'},
  // {path:'home',canActivate:[AuthGuard],component:HomeComponent},
  // {path:'about',canActivate:[AuthGuard],component:AboutComponent},
  // {path:'movies',canActivate:[AuthGuard],component:MoviesComponent},
  // {path:'tv',canActivate:[AuthGuard],component:TvComponent},
  // {path:'network',canActivate:[AuthGuard],component:NetworkComponent},
  // {path:'people' ,canActivate:[AuthGuard],component:PeopleComponent},
  // {path:'login',component:LoginComponent},
  // {path:'register',component:RegisterComponent},
  // {path:'**',component:NotfoundComponent},

  {path:'' ,redirectTo:'home', pathMatch:'full'},
  {path:'home',component:HomeComponent},
  {path:'about',component:AboutComponent},
  {path:'movies',component:MoviesComponent},
  {path:'tv',component:TvComponent},
  {path:'network',component:NetworkComponent},
  {path:'people' ,component:PeopleComponent},
  {path:'login',component:LoginComponent},
  {path:'moviedetails/:id',component:MoviedetailsComponent},
  {
    path: 'settings',
    loadChildren: () => import('./settings/settings.module').then(m => m.SettingsModule)
  },
  {path:'register',component:RegisterComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
