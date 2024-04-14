// home-routing.module.ts
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CommunicationComponent } from './communication/communication.component';
import { OrgComponent } from './org.component';

// const routes: Routes = [
//   {
//     path: '',
//     component: OrgComponent,
//     children: [
//       { path: '/org', redirectTo: '/org/communication', pathMatch: 'full' },
//       { path: '/org/communication', component: CommunicationComponent }
//     ]
//   }
// ];

@NgModule({
  // imports: [RouterModule.forChild(routes)],
  // exports: [RouterModule]
})
export class OrgRoutingModule { }
