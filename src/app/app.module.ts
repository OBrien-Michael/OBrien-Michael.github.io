import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

//Shared Layout Imports
import { HeaderComponent } from './layout/header/header.component';
import { FooterComponent } from './layout/footer/footer.component';

import { AboutComponent } from './modules/pages/about/about.component';
import { HomeComponent } from './modules/pages/home/home.component';

@NgModule({
  declarations: [
    AppComponent,

    //Layout Components
    HeaderComponent,
    FooterComponent,

    //Modules Pages Components
    HomeComponent,
    AboutComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
