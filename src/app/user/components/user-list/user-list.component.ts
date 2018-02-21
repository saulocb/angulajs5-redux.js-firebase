import { Observable } from 'rxjs/Observable';
import { User } from '../../models/user';
import { Rule } from '../../models/rule';
import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss']
})
export class UserListComponent implements OnInit {
  @Input() userList: Observable<User[]>;
  @Output() details: EventEmitter<any> = new EventEmitter(false);
  @Output() detailsDelete: EventEmitter<any> = new EventEmitter(false);
  isLoading: boolean;  
  
  constructor() { }

  ngOnInit() {
  }
  onDetails(user: User): void {
    if(user != null){
      this.details.emit(user);
    }
  }
  onDelete(user: User){
    if(user != null){
      this.detailsDelete.emit(user);
    }
  }

}
