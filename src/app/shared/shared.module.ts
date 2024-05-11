import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PageHeaderComponent } from './page-header/page-header.component';
import { MatIconModule } from '@angular/material/icon';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatMenuModule } from '@angular/material/menu';
import { MatButtonModule } from '@angular/material/button';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterLink } from '@angular/router';
import { TabComponent } from './tabs/tab/tab.component';
import { TabsComponent } from './tabs/tabs/tabs.component';
import { ToggleComponent } from './toggle/toggle.component';
import { FormsModule } from '@angular/forms';
import { AccordionComponent } from './accordion/accordion.component';
import { AccordionPanelComponent } from './accordion/accordion-panel/accordion-panel.component';
import { SearchboxComponent } from './searchbox/searchbox.component';
import { TableComponent } from './table/table.component';
import { BreadcrumbComponent } from './breadcrumb/breadcrumb.component';
import { SelectListComponent } from './select-list/select-list.component';
import { MenuListComponent } from './menu-list/menu-list.component';
import { NavigationComponent } from './navigation/navigation.component';
import { MultiSelectComponent } from './multi-select/multi-select.component';

@NgModule({
  declarations: [
    PageHeaderComponent,
    TabComponent,
    TabsComponent,
    ToggleComponent,
    AccordionComponent,
    AccordionPanelComponent,
    SearchboxComponent,
    TableComponent,
    BreadcrumbComponent,
    SelectListComponent,
    MenuListComponent,
    NavigationComponent,
    MultiSelectComponent
  ],
  imports: [
    CommonModule,
    MatIconModule,
    MatTooltipModule,
    MatMenuModule,
    MatButtonModule,
    RouterLink,
    BrowserAnimationsModule,
    FormsModule,
    MatIconModule
  ],
  exports: [
    PageHeaderComponent,
    TabsComponent,
    TabComponent,
    ToggleComponent,
    AccordionComponent,
    AccordionPanelComponent,
    SearchboxComponent,
    TableComponent,
    MenuListComponent,
    NavigationComponent,
    MultiSelectComponent
  ]
})
export class SharedModule { }
