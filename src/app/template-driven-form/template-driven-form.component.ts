import { Component } from '@angular/core';

@Component({
  selector: 'app-template-driven-form',
  templateUrl: './template-driven-form.component.html',
  styleUrls: ['./template-driven-form.component.css']
})
export class TemplateDrivenFormComponent {
   
  save(formData:any){
    console.log(formData);
    
  }
  user:{email:String,name:String }={
       email:'',
       name:''

  }
   
}
