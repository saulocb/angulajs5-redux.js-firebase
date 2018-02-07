import { Component, OnInit } from '@angular/core';
import { Rule } from '../../models/rule';
import { RuleService } from '../../service/rule.service';
import { Observable } from 'rxjs/Observable';
import { RuleStoreService } from '../../service/ruleStoreService';
import { RulesPayload } from '../../store/user.actions';

@Component({
  selector: 'app-rule',
  templateUrl: './rule.component.html',
  styleUrls: ['./rule.component.scss']
})
export class RuleComponent implements OnInit {
  rule$: Observable<Rule[]>;
  constructor(private ruleService: RuleService,private ruleStoreService: RuleStoreService) { }

  ngOnInit() {
    this.rule$ = this.ruleStoreService.rule$; 
  }

delete(rule: Rule){
    Observable.of(this.ruleStoreService.delete(rule)).subscribe(res =>{
      alert("deleted with sucess...");
    }, err =>{
      alert("deleted erro...");
    })
}
create(rule: Rule){
  if(rule != null){
     this.ruleService.userCreat(rule);
   }
}

}
