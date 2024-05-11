import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ConfigureComponent } from './configure.component';
import { BrandComponent } from './pages/brand/brand.component';
import { UsersComponent } from './pages/users/users.component';
import { RefDataComponent } from './pages/ref-data/ref-data.component';



@NgModule({
  declarations: [
    ConfigureComponent,
    BrandComponent,
    UsersComponent,
    RefDataComponent
  ],
  imports: [
    CommonModule
  ]
})
export class ConfigureModule { }
