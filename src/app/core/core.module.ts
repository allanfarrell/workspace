import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared/shared.module';
import { MatIcon, MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { NotFoundComponent } from './pages/not-found/not-found.component';
import { MenuComponent } from './components/menu/menu.component';
import { NavigationComponent } from './components/navigation/navigation.component';
import { FilterbygroupPipe } from './pipe/filterbygroup.pipe';
import { RouterModule } from '@angular/router';
import { UniquePipe } from './pipe/unique.pipe';

@NgModule({
  declarations: [
    NotFoundComponent,
    MenuComponent,
    NavigationComponent,
    FilterbygroupPipe,
    UniquePipe
  ],
  imports: [
    CommonModule,
    RouterModule,
    MatIconModule
  ],
  exports: [
    MenuComponent,
    NavigationComponent
  ]
})
export class CoreModule { }
