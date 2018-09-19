import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
//Components
// import { HomeComponent } from './home/home.component';
// import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { DashboardComponent } from './dashboard/dashboard.component';

export const ROUTES: Routes = [
  // {path: 'home', component: HomeComponent},
  // {path: '', component: LoginComponent},
  {path: 'register', component: RegisterComponent},
  {path: 'dashboard', component: DashboardComponent}
];

export const Routing: ModuleWithProviders = RouterModule.forRoot(ROUTES);