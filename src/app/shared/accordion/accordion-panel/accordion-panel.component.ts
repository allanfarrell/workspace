import { Component, Input } from '@angular/core';
import { AccordionComponent } from '../accordion.component';

@Component({
  selector: 'app-accordion-panel',
  templateUrl: './accordion-panel.component.html',
  styleUrls: ['./accordion-panel.component.scss']
})
export class AccordionPanelComponent {
  @Input() isActive: boolean = false;

  constructor(private accordion: AccordionComponent) {}

  togglePanel() {
    this.accordion.togglePanel(this);
  }
}
