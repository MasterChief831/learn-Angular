import { Component } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-route-paramter-emplst',
  templateUrl: './route-paramter-emplst.component.html',
  styleUrls: ['./route-paramter-emplst.component.css']
})
export class RouteParamterEmplstComponent {
  constructor(private router:Router){}
  EMplist=[
    {id:1,"name":"aryan"},
    {id:2,"name":"ashutosh"}
]

  empDet(list:any){
    this.router.navigate(['list',list.id]);
  }
  
}
