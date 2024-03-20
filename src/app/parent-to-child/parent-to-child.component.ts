import { Component, Input} from '@angular/core';

@Component({
  selector: 'app-parent-to-child',
  templateUrl: './parent-to-child.component.html',
  styleUrls: ['./parent-to-child.component.css']
})
export class ParentToChildComponent {
  @Input() data: string='';
  @Input() ob: any[]=[];

}
