import { Component, Input, OnInit } from '@angular/core';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor() { }

  @Input()
  isVisible = false;
  ngOnInit(): void { }

  ngOnChanges(changes: any) {
    this.isVisible = changes.isVisible.currentValue;
  }


}
