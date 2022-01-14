import { Component, OnChanges, OnInit } from '@angular/core';
import { routingAnimate } from '../../../shared/animations/routing';

@Component({
  selector: 'app-user-properties',
  templateUrl: './user-properties.component.html',
  styleUrls: ['./user-properties.component.scss'],
  animations: [routingAnimate]
})
export class UserPropertiesComponent implements OnInit, OnChanges {

  toggleSidebar = false;
  constructor() {

  }

  ngOnInit(): void {
  }
  ngOnChanges(changes: any) {
    this.toggleSidebar = changes.isOpen.currentValue;
  }
  toggle() {
    this.toggleSidebar = !this.toggleSidebar
  }
}