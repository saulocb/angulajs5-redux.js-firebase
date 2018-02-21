import { Rule } from '../models/rule';
import { Validators, FormBuilder, FormGroup } from '@angular/forms';
import { RuleService } from '../service/rule.service';
import { Component, OnInit, Input, Output,EventEmitter } from '@angular/core';

@Component({
  selector: 'app-rule-form',
  templateUrl: './rule-form.component.html',
  styleUrls: ['./rule-form.component.scss']
})
export class RuleFormComponent implements OnInit {
 rule: Rule =  new Rule();
 @Output() ruleCreate: EventEmitter<any> = new EventEmitter(false);
 ruleCreatForm: FormGroup;
  constructor(private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.createForm();
  }
  onSubmit(){
    if(this.ruleCreatForm.valid){
       this.ruleCreate.emit(this.rule)
    }
  }

  private createForm() {
    this.ruleCreatForm = this.formBuilder.group({
      ruleName: ['', Validators.required],
    });
  }

}
