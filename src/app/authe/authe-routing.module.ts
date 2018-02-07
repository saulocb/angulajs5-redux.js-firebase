import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Route } from '../core/route.service';
import { extract } from '../core/i18n.service';
import { AuthenticationComponent } from './components/authentication/authentication.component';

const routes: Routes = Route.withShell([
  { path: 'login', component: AuthenticationComponent, data: { title: extract('Login') } },
]);


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AutheRoutingModule { }
