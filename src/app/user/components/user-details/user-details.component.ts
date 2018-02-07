import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { User } from '../../models/user';
import { UserService } from '../../service/user.service';
import { Observable } from 'rxjs/Observable';
import { UserStoreService } from '../../service/userStoreService';

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.scss']
})
export class UserDetailsComponent implements OnInit {
  user: User =  new User();
  userFromDb$ =  new  Observable<any>();
  uerString: string;
  userKey: any;
  userKeyfff: any;

  constructor(private route: ActivatedRoute,private userService: UserStoreService) { 
    this.route.queryParams.subscribe(params => {
      this.uerString = params["user"];
      this.userKeyfff = params["userKey"];
  });
  this.user  = JSON.parse(this.uerString);
  this.userKey =  this.user.key
  this.userService.getUser(this.userKey);
  }

  ngOnInit() {
     this.userFromDb$ =  this.userService.userBy$;
  }

  onSubmit(){
    this.userService.update(this.user);
  }

  ruleselectChange(rule: any){
    if(rule != null){
      this.user.rule.key = rule.target.value;
    } 
  }

}
