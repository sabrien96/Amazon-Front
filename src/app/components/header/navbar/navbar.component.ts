import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  @Input()
  isVisible = true;
  categories = [
    {cateName:'Fashion'},
    {cateName:'Grocery'},
    {cateName:'Perfumes'},
    {cateName:'Mobile Phones'},
    {cateName:'Electronics'},
    {cateName:'Appliances'}
  ]
  constructor() { }

  ngOnInit(): void {
  }

}
