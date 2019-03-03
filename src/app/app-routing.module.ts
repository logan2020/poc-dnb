import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { CustomerSearchComponent } from './customer-search/customer-search.component';
import { CustomerDetailsComponent } from './customer-details/customer-details.component';

const routes: Routes = [
  {path:'login',component: LoginComponent},
  {path:'customer-search',component: CustomerSearchComponent},
  {path:'customer-details',component: CustomerDetailsComponent},
  {path:'', pathMatch:'full', redirectTo:'login'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
