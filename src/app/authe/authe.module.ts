import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AutheRoutingModule } from './authe-routing.module';
import { AuthenticationComponent } from './components/authentication/authentication.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    AutheRoutingModule,
    FormsModule,
  ],
  declarations: [AuthenticationComponent],
  exports:[AuthenticationComponent]
})
export class AutheModule { }
