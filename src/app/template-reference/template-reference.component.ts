import { Component } from '@angular/core';

@Component({
  selector: 'app-template-reference',
  templateUrl: './template-reference.component.html',
  styleUrls: ['./template-reference.component.css']
})
export class TemplateReferenceComponent {
      public s="";
      save(s1:string){
      this.s=s1;
      } 



}
