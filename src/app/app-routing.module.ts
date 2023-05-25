import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AboutMeComponent } from './home/pages/aboutme/about-me/about-me.component';
import { LandingComponent } from './home/pages/landing/landing/landing.component';

const routes: Routes = [
  {path: '', component: LandingComponent},
  {path: 'about-me', component: AboutMeComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
