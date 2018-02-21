import { ActivatedRoute } from '@angular/router';
import { User } from '../../models/user';
import { UserService } from '../../service/user.service';
import { Observable } from 'rxjs/Observable';
import { UserStoreService } from '../../service/userStoreService';
import { Component, OnInit, Output } from '@angular/core';


@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.scss']
})
export class UserDetailsComponent implements OnInit {
  user: User =  new User();
  userFromDb$ =  new  Observable<any>();
  uerString: string;

  constructor(private route: ActivatedRoute,private userService: UserStoreService) { 
    this.route.queryParams.subscribe(params => {
      this.uerString = params["user"];
  });

  this.user  = JSON.parse(this.uerString);
  this.userService.getUser(this.user.key);
  }

  ngOnInit() {
     this.userFromDb$ =  this.userService.userBy$;
  }

  onSubmit(){ 
      Observable.of( this.userService.update(this.user)).subscribe(res => {
          alert("Updated with sucess..");
      },error =>{
        alert("erro.");
      }
    );

  }

  ruleselectChange(rule: any){
    if(rule != null){
      this.user.rule.key = rule.target.value;
    } 
  }

}
