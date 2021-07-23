import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthComponent } from './auth.component';
// Components
import { LoginEmailComponent } from './login-email/login-email.component';
import { SignupEmailComponent } from './signup-email/signup-email.component';
import { UserAccountsComponent } from './user-accounts/user-accounts.component';


const routes: Routes = [
  {
    path: '',
    component: AuthComponent,
    children: [
      {
        path: '',
        pathMatch: 'full',
        redirectTo: 'login'
      },
      {
        path: 'login',
        pathMatch: 'full',
        component: LoginEmailComponent
      },
      {
        path: 'signup',
        pathMatch: 'full',
        component: SignupEmailComponent
      },
      {
        path: 'user-accounts',
        pathMatch: 'full',
        component: UserAccountsComponent
      }
    ]
  }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthRoutingModule { }
