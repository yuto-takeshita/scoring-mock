import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { LogoComponent } from './modules/login/components/logo/logo.component';
import { UserIdFormComponent } from './modules/login/components/forms/user-id-form/user-id-form.component';
import { PasswordFormComponent } from './modules/login/components/forms/password-form/password-form.component';
import { LoginPageComponent } from './modules/login/components/pages/login/login-page.component';
import { CoreModule } from './core/core.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AngularSvgIconModule } from 'angular-svg-icon';

@NgModule({
  declarations: [
    AppComponent,
    LoginPageComponent,
    LogoComponent,
    UserIdFormComponent,
    PasswordFormComponent,
  ],
  entryComponents: [],
  imports: [
    CoreModule,
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule,
    AngularSvgIconModule,
  ],
  exports: [],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
