import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FetchDataApiComponent } from './fetch-data-api/fetch-data-api.component';
import {HttpClientModule} from '@angular/common/http';
import { ReportComponent } from './report/report.component';
import { TemplateDrivenFormComponent } from './template-driven-form/template-driven-form.component'
import { FormsModule } from '@angular/forms';
import { HomeComponent } from './home/home.component';
import { ContactComponent } from './contact/contact.component';
import { AboutComponent } from './about/about.component';
import { RoutingExampleComponent } from './routing-example/routing-example.component';
import { NotFoundPageComponent } from './not-found-page/not-found-page.component';
import { LoginComponent } from './login/login.component';
import { RouteParamterEmplstComponent } from './route-paramter-emplst/route-paramter-emplst.component';
import { RouteParamterEmpdetailComponent } from './route-paramter-empdetail/route-paramter-empdetail.component';
import { ParentChildRoutingProductsComponent } from './parent-child-routing-products/parent-child-routing-products.component';
import { ParentChildRoutingTrouserComponent } from './parent-child-routing-trouser/parent-child-routing-trouser.component';
import { ParentChildRoutingTshirtComponent } from './parent-child-routing-tshirt/parent-child-routing-tshirt.component';
@NgModule({
  declarations: [
    AppComponent,
    FetchDataApiComponent,
    ReportComponent,
    TemplateDrivenFormComponent,
    HomeComponent,
    ContactComponent,
    AboutComponent,
    RoutingExampleComponent,
    NotFoundPageComponent,
    LoginComponent,
    RouteParamterEmplstComponent,
    RouteParamterEmpdetailComponent,
    ParentChildRoutingProductsComponent,
    ParentChildRoutingTrouserComponent,
    ParentChildRoutingTshirtComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
