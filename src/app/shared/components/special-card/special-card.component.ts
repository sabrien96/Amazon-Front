import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-special-card',
  templateUrl: './special-card.component.html',
  styleUrls: ['./special-card.component.scss']
})
export class SpecialCardComponent implements OnInit {
  @Input()product:any;
  constructor() { }

  ngOnInit(): void {
  }

}
