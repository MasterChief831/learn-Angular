import { Component } from '@angular/core';
import { ApiService } from '../services/api.service';
@Component({
  selector: 'app-fetch-data-api',
  templateUrl: './fetch-data-api.component.html',
  styleUrls: ['./fetch-data-api.component.css']
})
export class FetchDataApiComponent {
  posts:any;
  constructor(private post:ApiService){
                       // jo bhi response aaega api se wo yeh response object me aake store hota hai and usko apn ne get me le liya   
      this.post.getPosts().subscribe(response=>{
        this.posts=response;
      })


  }

}
