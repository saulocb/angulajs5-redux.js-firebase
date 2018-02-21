import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';


import { UserCreatComponent } from './components/user-creat/user-creat.component';
import { UsersComponent } from './components/users/users.component';
import { UserListComponent } from './components/user-list/user-list.component';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { UserEffects } from './store/user.effects';
import { UserStoreService } from './service/userStoreService';
import { UserService } from './service/user.service';
import { TranslateModule } from '@ngx-translate/core';
import { SharedModule } from '../shared/shared.module';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { AngularFireDatabase } from 'angularfire2/database';
import { DropdowRuleComponent } from './components/dropdow-rule/dropdow-rule.component';
import { ruleReducer } from './store/ruleStore/rule.reduce';
import { userReducer } from './store/userStore/user.reduce';
import { SelectComponent } from './components/select/select.component';
import { selectPipe } from './piper/selectPipe';
import { RemoveIndex } from './piper/removeindex';
import { UserDetailsComponent } from './components/user-details/user-details.component';
import { UserRoutingModule } from './user-routing.module';
import { RuleFormComponent } from './rule-form/rule-form.component';
import { RuleService } from './service/rule.service';
import { RuleStoreService } from './service/ruleStoreService';
import { RuleListComponent } from './components/rule-list/rule-list.component';
import { RuleComponent } from './components/rule/rule.component';
import { CoreModule } from '../core/core.module';


@NgModule({
  imports: [
    CoreModule,
    SharedModule,
    CommonModule,
    TranslateModule,
    ReactiveFormsModule,
    FormsModule,
    StoreModule.forRoot({
      user: userReducer,
      rule: ruleReducer
    }),
    EffectsModule.forRoot([UserEffects]),
    UserRoutingModule
  ],
  providers: [UserStoreService,UserService,AngularFireDatabase,RuleService,RuleStoreService],

  declarations: [
  UserCreatComponent,
  RemoveIndex, 
  selectPipe,
  UsersComponent, 
  UserListComponent, 
  DropdowRuleComponent, 
  SelectComponent, 
  UserDetailsComponent, RuleFormComponent, RuleListComponent, RuleComponent
],
  exports: [UserCreatComponent, UsersComponent, UserListComponent]
})
export class UserModule { }
