import { Observable } from 'rxjs/Observable';
import { Rule } from '../../models/rule';
import { RuleStoreService } from '../../service/ruleStoreService';
import { Component, OnInit, Input, Output,EventEmitter } from '@angular/core';

@Component({
  selector: 'app-rule-list',
  templateUrl: './rule-list.component.html',
  styleUrls: ['./rule-list.component.scss']
})
export class RuleListComponent implements OnInit {
  @Output() ruleDelete: EventEmitter<any> = new EventEmitter(false);
  @Input() rules: Observable<Rule[]>;
  constructor(private userStoreService: RuleStoreService) { }

  ngOnInit() {
  }

  delete(rule: Rule){
    if(rule != null){
       this.ruleDelete.emit(rule);
    }
  }

}
