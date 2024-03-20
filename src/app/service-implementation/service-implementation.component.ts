import { Component } from '@angular/core';
import { StudentserviceService } from '../services/studentservice.service';


@Component({
  selector: 'app-service-implementation',
  templateUrl: './service-implementation.component.html',
  styleUrls: ['./service-implementation.component.css'],
  
})
export class ServiceImplementationComponent {
  public student:any;
  constructor( private std:StudentserviceService){
      this.student=std.getStudent();
  }
   
}
