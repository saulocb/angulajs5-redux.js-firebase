import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { User } from '../../models/user';
import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-user-creat',
  templateUrl: './user-creat.component.html',
  styleUrls: ['./user-creat.component.scss']
})
export class UserCreatComponent {

  @Output() createUser: EventEmitter<any> = new EventEmitter(false);
  mm: string;


  userCreatForm: FormGroup;
  public user: User = new User();
  
  constructor(private formBuilder: FormBuilder) { 
    this.mm = this.user.rule.ruleName;
    this.createForm()
    
  }


  onSubmit(): void {
    if (this.userCreatForm.valid) {
      this.createUser.emit(this.user);
    }
  }

  ruleselectChange(rule: any){
    if(rule != null){
      this.user.rule.key =  rule.target.value;
    } 
  }
  private createForm() {
    this.userCreatForm = this.formBuilder.group({
      email: ['', Validators.required],
      name: ['', Validators.required],
    });
  }

}
