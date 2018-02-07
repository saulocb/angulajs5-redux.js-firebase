import { Component, OnInit } from '@angular/core';
import { User } from '../../models/user';
import { UserStoreService } from '../../service/userStoreService';
import { UserService } from '../../service/user.service';
import { Router, NavigationExtras } from '@angular/router';
import { Observable } from 'rxjs/Observable';

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
