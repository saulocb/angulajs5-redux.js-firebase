import { Observable } from 'rxjs/Observable';
import { User } from '../../models/user';
import { Rule } from '../../models/rule';
import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { UserService } from '../../service/user.service';
import { Router, NavigationExtras } from '@angular/router';
import { UserStoreService } from '../../service/userStoreService';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {
  users: Observable<User[]>;
  constructor( private userService: UserService ,private router: Router,private userStoreService: UserStoreService) { }

  ngOnInit() {
    this.users = this.userStoreService.getAllUser();
  }

  onCreateUser(user: User){
     this.userService.userCreat(user);
  }
  ShowDetails(user: User){
    var userString = JSON.stringify(user);
    let navigationExtras: NavigationExtras = {
      queryParams: {
          "user": userString,
          "teste": "ola mundo"
       }
     };
    this.router.navigate(["/details"], navigationExtras);
  }
  
  delete(user: User){
     if(user != null){
        this.userService.delete(user.key);
     }
  }


}
