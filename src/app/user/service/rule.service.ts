import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';

//firebase Import
import { AngularFireDatabase , AngularFireObject, AngularFireList} from 'angularfire2/database';
import { promise } from 'selenium-webdriver';
import { Rule } from '../models/rule';
import { map } from 'rxjs/operators';



@Injectable()
export class RuleService {
   itemRuleRef:  AngularFireList<any>;

  constructor(
     private db: AngularFireDatabase
) { 
    this.itemRuleRef  = db.list<Rule>('rule');
}

userCreat(rule: any): Observable<any>{
   return  Observable.of(this.itemRuleRef.push(rule));
}

getAllRule(): Observable<Rule[]> {
    return this.itemRuleRef.snapshotChanges().map(actions => {
         return actions.map(action => ({ key: action.key, ...action.payload.val() }));
     });
 }

 delete(rule: any): Observable<any>{
  return Observable.of(this.db.list('rule/' + rule.payload.key).remove());
}



}

