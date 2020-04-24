import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SitelayoutComponent } from 'src/app/employer/sitelayout/sitelayout.component';
import { LoginComponent } from 'src/app/employer/sitelayout/login/login.component';
import { RegisterComponent } from 'src/app/employer/sitelayout/register/register.component';
import { VerifyComponent } from './employer/sitelayout/verify/verify.component';

const routes: Routes = [
  { path: '',
    component: SitelayoutComponent,
    children: [
      { path: '', component: LoginComponent, pathMatch: 'full'},
      { path: 'register', component: RegisterComponent, pathMatch: 'full'},
      { path: 'verify/:id', component: VerifyComponent, pathMatch: 'full' }
    ]
  },
  { path: '**', redirectTo: '' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
