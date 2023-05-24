import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

//Shared Layout Imports
import { HeaderComponent } from './shared/layout/header/header/header.component';

@NgModule({
  declarations: [
    AppComponent,
    
    //Shared Layout Components
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
