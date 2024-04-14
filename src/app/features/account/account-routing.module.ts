// home-routing.module.ts
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AccountComponent } from './account.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { SettingsComponent } from './settings/settings.component';


const routes: Routes = [
  {
    path: 'account',
    component: AccountComponent,
    children: [
      { path: '/account', redirectTo: '/account/dashboard', pathMatch: 'full' },
      { path: '/account/dashboard', component: DashboardComponent },
      { path: 'account/settings', component: SettingsComponent }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
