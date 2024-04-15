import { Component, Input } from '@angular/core';
import { BreadcrumbModel } from './breadcrumb.model';

@Component({
  selector: 'app-breadcrumb',
  templateUrl: './breadcrumb.component.html',
  styleUrls: ['./breadcrumb.component.scss']
})
export class BreadcrumbComponent {
  @Input() crumbs: BreadcrumbModel[] = []
}
