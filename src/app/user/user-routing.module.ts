
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { Route } from '../core/route.service';
import { extract } from '../core/i18n.service';
import { UserDetailsComponent } from './components/user-details/user-details.component';
import { RuleFormComponent } from './rule-form/rule-form.component';
import { RuleComponent } from './components/rule/rule.component';
import { UsersComponent } from './components/users/users.component';

const routes: Routes = Route.withShell([
  { path: 'details', component: UserDetailsComponent, data: { title: extract('About') } },
  { path: 'rule', component: RuleComponent, data: { title: extract('Rules') } },
  { path: 'listUser', component: UsersComponent, data: { title: extract('Uses') } },
]);




@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})




export class UserRoutingModule { }
