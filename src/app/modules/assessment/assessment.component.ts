import { Component } from '@angular/core';

@Component({
  selector: 'app-assessment',
  templateUrl: './assessment.component.html',
  styleUrls: ['./assessment.component.scss']
})
export class AssessmentComponent {
  menu = [
    { group: 'Assessment', name: 'Search', route: '/assessment/tbc' },
  ];
}
