import { Component } from '@angular/core';

@Component({
  selector: 'app-assess-queue',
  templateUrl: './assess-queue.component.html',
  styleUrls: ['./assess-queue.component.scss']
})
export class AssessQueueComponent {
 data = [
  { id: '1', two: 'here' }
 ];
 headers = [
  'id', 'here'
 ];
}