import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StudentserviceService {
      
  constructor() { }
  getStudent(){
    return [
     {name:"Aryan" ,age:"21"},
     {name:"Ashutosh" ,age:"22"}

 

    ]
  }
}
