import { Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { LayoutComponent } from './components/layout/layout.component';
import { ActiveLoanComponent } from './components/active-loan/active-loan.component';
import { CreateLoanComponent } from './components/create-loan/create-loan.component';

export const routes: Routes = [
    {path:"login",component:LoginComponent},
    {path:"",component:LayoutComponent,children:[
        {path:"main",component:ActiveLoanComponent},
        {path:"create",component:CreateLoanComponent}
    ]}
    
];
