import { Component, inject } from '@angular/core';
import { ImgBBUploadService } from './imgbbservice';

@Component({
  selector: 'app-structure-directive',
  templateUrl: './structure-directive.component.html',
  styleUrls: ['./structure-directive.component.css']
})
export class StructureDirectiveComponent {

  constructor(private imgb: ImgBBUploadService) { }


  public display = false;
  public a = "";
  check(number: any) {
    this.display = true
    if (number > 10) this.a = "true";
    else this.a = "false";


  }

  public fruits = [
    "mango",
    "orange",
    "apple",
    "watermelon",
    "watermelon"
  ]

  public object=[
    {
      "name":"aryan",
        "lname":"sharma",
        hobbies:["cricket","football"]
    },
    {
      "name":"ashutosh",
        "lname":"rawat",
        hobbies:["cricket","football"]
    }
  ]
   















  // submit(event:Event){
  //                  const input=event.target as HTMLInputElement;
  //                  console.log(input.files[0]);

  //                 this.imgb.upload(input.files[0]).subscribe(url=>console.log(url));

  // }


  //   onFileSelected(event:Event){
  // this.selectedFile= <File>event.target.files[0];
  //   }
  //   onimg(img:any){
  //     const headers = new HttpHeaders({

  //       "key":"18d6a1c0088fc25d93fffa89b6f43f40"
  //     });

  //  this.http.post( "https://api.imgbb.com/1/upload?key=18d6a1c0088fc25d93fffa89b6f43f40",img).subscribe({
  //   next:(resp)=>{
  //    console.log(resp);

  //   },
  //   error:(err)=>{
  // console.log(err);

  //   }
  //  })

  //   }








}
