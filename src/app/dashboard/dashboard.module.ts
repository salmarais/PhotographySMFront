import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StatsCardComponent } from './Elements/stats-card/stats-card.component';
import { ReviewCardComponent } from './Elements/review-card/review-card.component';
import { QueryCardComponent } from './Elements/query-card/query-card.component';
import { ListCardComponent } from './Elements/list-card/list-card.component';
import { ReclamationsCardComponent } from './Elements/reclamations-card/reclamations-card.component';
import { UserDashboardComponent } from './user-dashboard/user-dashboard.component';
import { PhotographerDashboardComponent } from './photographer-dashboard/photographer-dashboard.component';
import { AdminDashboardComponent } from './admin-dashboard/admin-dashboard.component';
import { DashboardComponent } from './dashboard.component';
import {DashboardRoutingModule} from "./dashboard-routing.module";



@NgModule({
  declarations: [StatsCardComponent, ReviewCardComponent, QueryCardComponent, ListCardComponent, ReclamationsCardComponent, UserDashboardComponent, PhotographerDashboardComponent, AdminDashboardComponent, DashboardComponent],
  imports: [
    CommonModule,
    DashboardRoutingModule
  ]
})
export class DashboardModule { }
