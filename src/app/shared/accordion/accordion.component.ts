import { Component, ContentChildren, QueryList } from '@angular/core';
import { AccordionPanelComponent } from './accordion-panel/accordion-panel.component';

@Component({
  selector: 'app-accordion',
  templateUrl: './accordion.component.html',
  styleUrls: ['./accordion.component.scss']
})
export class AccordionComponent {
  @ContentChildren(AccordionPanelComponent) panels: QueryList<AccordionPanelComponent> = new QueryList<AccordionPanelComponent>();

  ngAfterContentInit() {
    const activePanel = this.panels.find(panel => panel.isActive);
    if (activePanel) {
      this.openPanel(activePanel);
    }
  }

  togglePanel(panel: AccordionPanelComponent) {
    if (panel.isActive) {
      this.closePanel(panel);
    } else {
      this.openPanel(panel);
    }
  }

  private openPanel(panel: AccordionPanelComponent) {
    this.panels.toArray().forEach(p => (p.isActive = false));
    panel.isActive = true;
  }

  private closePanel(panel: AccordionPanelComponent) {
    panel.isActive = false;
  }
}
