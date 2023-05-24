import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

//Shared Layout Imports
import { HeaderComponent } from './shared/layout/header/header/header.component';
import { FooterComponent } from './shared/layout/footer/footer/footer.component';

//Home Pages Imports
import { LandingComponent } from './home/pages/landing/landing/landing.component';

@NgModule({
  declarations: [
    AppComponent,
    
    //Shared Layout Components
    HeaderComponent,
    FooterComponent,

    //Home Page Components
    LandingComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
