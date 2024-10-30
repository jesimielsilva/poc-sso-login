import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginSsoInComponent } from './auth/login-sso-in/login-sso-in.component';
import { SingUpInComponent } from './auth/sing-up-in/sing-up-in.component';

const routes: Routes = [
  { path: 'login', component: LoginSsoInComponent },
  { path: 'signup', component: SingUpInComponent },
  { path: '', redirectTo: '/login', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
