import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { TranslateModule } from '@ngx-translate/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';

import { CoreModule } from './core/core.module';
import { SharedModule } from './shared/shared.module';
import { HomeModule } from './home/home.module';
import { AboutModule } from './about/about.module';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { UserModule } from './user/user.module';
import { environment } from '../environments/environment';
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { AutheModule } from './authe/authe.module';



@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    TranslateModule.forRoot(),
    NgbModule.forRoot(),
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireDatabaseModule,
    CoreModule,
    SharedModule,
    HomeModule,
    AboutModule,
    AppRoutingModule,
    UserModule,
    AutheModule
  ],
  declarations: [AppComponent],
  providers: [
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
