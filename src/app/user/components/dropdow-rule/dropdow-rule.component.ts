import { Component, OnInit, Input, Output,EventEmitter } from '@angular/core';
import { Rule } from '../../models/rule';
import { Observable } from 'rxjs/Observable';
import { UserStoreService } from '../../service/userStoreService';
import { User } from '../../models/user';
import { RuleStoreService } from '../../service/ruleStoreService';

@Component({
  selector: 'app-dropdow-rule',
  templateUrl: './dropdow-rule.component.html',
  styleUrls: ['./dropdow-rule.component.scss']
})
export class DropdowRuleComponent implements OnInit {

    @Output() ruleselect: EventEmitter<any> = new EventEmitter(false);
    @Input() selectt: string;
    @Input()  user: User= new User();
    select2: string  = "user";
    rule$: Observable<Rule[]>;


    
  constructor(private ruleStoreService: RuleStoreService) { }

  ngOnInit() {
    this.rule$ = this.ruleStoreService.rule$;  
  }

  ruleSelectevent(rule: any): void{
    if(rule != null){
      this.ruleselect.emit(rule);
    }
  }


}
