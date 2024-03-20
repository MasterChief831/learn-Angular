import { Component } from '@angular/core';

@Component({
  selector: 'app-class-binding',
  templateUrl: './class-binding.component.html',
  styleUrls: ['./class-binding.component.css']
})
export class ClassBindingComponent {
 public myname="";
  public css="";  


   printname(){
    this.myname="Aryan";
   }

   mouseover(){
   this.css="mouseover";
   console.log(this);

   }
   mouseout(){
    this.css="";
    
   }

}
