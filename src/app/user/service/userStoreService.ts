import { Store } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';
import { Injectable } from '@angular/core';

import * as actions from './../store/user.actions';
import { User } from '../models/user';
import { Rule } from '../models/rule';

@Injectable()
export class UserStoreService {

  user$: Observable<any[]>;
  userBy$: Observable<User[]>;

  constructor(
    private userStore: Store<any>,
  ) {
  }

  getAllUser(): Observable<any[]>{
    this.userStore.dispatch(new actions.LoadAction());
    return this.userStore.select('user') as Observable<any[]>;
  }

  getUser(userKey: any){
    this.userBy$ = this.userStore.select('user') as Observable<any[]>;
    this.userStore.dispatch(new actions.GetUserAction(userKey));
  }

  update(user: any){
    this.userStore.dispatch(new actions.UpdateUserAction(user));
  }

  delete(user: any){
    this.userStore.dispatch(new actions.DeleteUserAction(user));
  }
  

}
