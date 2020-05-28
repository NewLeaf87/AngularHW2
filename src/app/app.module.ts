import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RightPageComponentComponent } from './right-page-component/right-page-component.component';
import { LeftPageComponentComponent } from './left-page-component/left-page-component.component';
import { AboutPageComponentComponent } from './about-page-component/about-page-component.component';

@NgModule({
  declarations: [
    AppComponent
    RightPageComponent,
    LeftPageComponent,
    AboutPageComponent,
    RightPageComponentComponent,
    LeftPageComponentComponent,
    AboutPageComponentComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
