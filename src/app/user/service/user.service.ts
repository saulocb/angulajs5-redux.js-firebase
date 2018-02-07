import { Injectable, AnimationKeyframesSequenceMetadata } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { User } from '../models/user';

//firebase Import
import { AngularFireDatabase , AngularFireObject, AngularFireList} from 'angularfire2/database';
import { promise } from 'selenium-webdriver';
import { Rule } from '../models/rule';
import { map } from 'rxjs/operators';



@Injectable()
export class UserService {
  itemUsersRef: AngularFireList<any>;
  itemRuleRef:  AngularFireList<any>;

  constructor(
     private db: AngularFireDatabase
) { 
    this.itemRuleRef  = db.list<Rule>('rule');
    this.itemUsersRef = db.list<User>('user');
}

userCreat(user: User){
    // valid if this rule actually exists and then push
  this.db.list('rule/'+ user.rule.key).valueChanges().subscribe(res =>{
      user.rule.ruleName = res[0] as string;
      return this.itemUsersRef.push(user);
  })
}

getAllUser(): Observable<User[]> {
  return  this.itemUsersRef.snapshotChanges().map(actions => {
            return actions.map(action => ({ key: action.key, ...action.payload.val() }));
           });
}

getUser(userKey: any): Observable<User> {
console.log(userKey)
    return this.db.list<User>('user/'+ userKey.payload).valueChanges().map((res: any) =>{
        return res;
    })
}

update(use: any): Observable<any>{
    //valid then update
   var user: User =  use.payload;
  return this.db.list<any>('rule/'+ user.rule.key).valueChanges().map(res =>{
       user.rule.ruleName =  res[0] as string;
       return this.db.list<User>('user/').update(user.key ,user);
    })
}

delete(use: any): Observable<any>{
    //valid then update
  return Observable.of(this.db.list('user/' + use).remove());
}






}

