import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent }  from './app.component';
import {StudentModule} from '../app/comp/Student/student.module';
import { WelcomeComponent } from '../app/home/welcome.component';


@NgModule({
  imports: [ BrowserModule, HttpModule, StudentModule ,AppRoutingModule ],

  declarations: [ AppComponent, WelcomeComponent  ],

  bootstrap: [ AppComponent ]//,
  
})
export class AppModule { }
