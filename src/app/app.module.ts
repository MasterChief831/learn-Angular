import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FetchDataApiComponent } from './fetch-data-api/fetch-data-api.component';
import {HttpClientModule} from '@angular/common/http';
import { ReportComponent } from './report/report.component'
@NgModule({
  declarations: [
    AppComponent,
    FetchDataApiComponent,
    ReportComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
