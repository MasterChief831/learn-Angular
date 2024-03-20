import { Component ,Output,EventEmitter} from '@angular/core';

@Component({
  selector: 'app-child-to-parent',
  templateUrl: './child-to-parent.component.html',
  styleUrls: ['./child-to-parent.component.css']
})
export class ChildToParentComponent {

  @Output() childevent=new EventEmitter();
  public  fireevent(){
      this.childevent.emit("Even is called in child ");
  }

}
