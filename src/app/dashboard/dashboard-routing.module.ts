import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {UserDashboardComponent} from "./user-dashboard/user-dashboard.component";
import {AdminDashboardComponent} from "./admin-dashboard/admin-dashboard.component";
import {PhotographerDashboardComponent} from "./photographer-dashboard/photographer-dashboard.component";

const routes: Routes = [
  {
    path: '',
    redirectTo: 'home'
  },
  {
    path: 'user',
    component: UserDashboardComponent
  },
  {
    path: 'admin',
    component: AdminDashboardComponent
  },
  {
    path: 'photographer',
    component: PhotographerDashboardComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class DashboardRoutingModule { }
