import { Component } from '@angular/core';

@Component({
  selector: 'app-event-handeling',
  templateUrl: './event-handeling.component.html',
  styleUrls: ['./event-handeling.component.css']
})
export class EventHandelingComponent {
   public name="";
   public css ="";
  myClick(){
    
      this.name="Aryan";
  }
mouseover(){
  
    this.css ="mouseover";
}

mouseout(){
this.css=""
}
}
