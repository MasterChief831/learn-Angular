import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ContactComponent } from './contact/contact.component';
import { AboutComponent } from './about/about.component';
import { NotFoundPageComponent } from './not-found-page/not-found-page.component';
import { RouteParamterEmplstComponent } from './route-paramter-emplst/route-paramter-emplst.component';
import { RouteParamterEmpdetailComponent } from './route-paramter-empdetail/route-paramter-empdetail.component';
import { ParentChildRoutingProductsComponent } from './parent-child-routing-products/parent-child-routing-products.component';
import { ParentChildRoutingTshirtComponent } from './parent-child-routing-tshirt/parent-child-routing-tshirt.component';
import { ParentChildRoutingTrouserComponent } from './parent-child-routing-trouser/parent-child-routing-trouser.component';

const routes: Routes = [
  {path:'',redirectTo:'home',pathMatch:'full'},
  {path:'home',component:HomeComponent},
  {path:'contact',component:ContactComponent},
  {path:'about',component:AboutComponent},
  {path:'list',component:RouteParamterEmplstComponent},
  {path:'list/:id',component:RouteParamterEmpdetailComponent},
  {
    path:'product',
    component:ParentChildRoutingProductsComponent,
    children:[
      {path:'tshirt',component:ParentChildRoutingTshirtComponent},
      {path:'trouser',component:ParentChildRoutingTrouserComponent}
    ]
     
  },
  {path:'**',component:NotFoundPageComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
