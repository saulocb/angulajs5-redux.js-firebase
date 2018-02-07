import { Store } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';
import { Injectable } from '@angular/core';

import * as actions from './../store/user.actions';
import { User } from '../models/user';
import { Rule } from '../models/rule';

@Injectable()
export class RuleStoreService {

  rule$: Observable<Rule[]>;

  constructor(
    private ruleStore: Store<any>,
  ) {
      ruleStore.dispatch(new actions.LoadRule());
      this.rule$ = ruleStore.select('rule') as Observable<Rule[]>;
  }

  delete(rule: any){
    this.ruleStore.dispatch(new actions.DeleteRuleAction(rule)); 
  }

  create(rule: any){
    this.ruleStore.dispatch(new actions.CreateRuleAction(rule));
  }
  

}
