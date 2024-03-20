import { Component } from '@angular/core';

@Component({
  selector: 'app-interpolation',
  templateUrl: './interpolation.component.html',
  styleUrls: ['./interpolation.component.css']
})
export class InterpolationComponent {
    

  // public acss:"interpolation_class";
  public class="interpolation_class";
  hello(a: number){
    if(a==5)   return "5 is called";
    else  return " no number called";
}
 
}
