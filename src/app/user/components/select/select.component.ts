import { Component, OnInit, Input } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { User } from '../../models/user';

@Component({
  selector: 'app-select',
  templateUrl: './select.component.html',
  styleUrls: ['./select.component.scss']
})
export class SelectComponent implements OnInit {
  @Input() user: any;
  constructor() { }

  ngOnInit() {
  }


  teste(){
    console.log(this.user);
  }

}
