import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DashboardComponent } from './dashboard/dashboard.component';
import { UserComponent } from './user/user.component';

const APP_ROUTES: Routes = [
    { path: '', component: DashboardComponent },
    { path: 'users', component: UserComponent }
];

export const Routing: ModuleWithProviders = RouterModule.forRoot(APP_ROUTES);