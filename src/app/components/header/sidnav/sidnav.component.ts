import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sidnav',
  templateUrl: './sidnav.component.html',
  styleUrls: ['./sidnav.component.scss']
})
export class SidnavComponent implements OnInit {
toggleSidebar=false;
  constructor() {

  }

  ngOnInit(): void {
  }
  ngOnChanges(changes: any) {
    this.toggleSidebar = changes.isOpen.currentValue;
  }
toggle(){
  this.toggleSidebar=!this.toggleSidebar
}
}
