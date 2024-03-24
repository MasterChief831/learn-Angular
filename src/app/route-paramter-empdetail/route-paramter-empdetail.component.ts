import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-route-paramter-empdetail',
  templateUrl: './route-paramter-empdetail.component.html',
  styleUrls: ['./route-paramter-empdetail.component.css']
})
export class RouteParamterEmpdetailComponent {
  public empId:any;
       constructor(private activateroute:ActivatedRoute){
        let id= this.activateroute.snapshot.paramMap.get('id');
           this.empId=id;
       }
}
