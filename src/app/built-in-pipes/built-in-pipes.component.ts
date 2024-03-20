import { Component } from '@angular/core';

@Component({
  selector: 'app-built-in-pipes',
  templateUrl: './built-in-pipes.component.html',
  styleUrls: ['./built-in-pipes.component.css']
})
export class BuiltInPipesComponent {
   public s="aryan sharma"

   public ob={
    "name":"aryan",
    "lname":"sharma"
   }
   public date = new Date();
}
