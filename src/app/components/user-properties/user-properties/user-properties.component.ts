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
    $('#openbtn').on('click', () => {
      $("#mySidenav").width("200px");
      $("#content").css('margin-left', '200px');
      console.log('open');
      document.body.style.backgroundColor = "rgba(0,0,0,0.4)";
    });

    $('.closebtn').on('click', () => {
      $("#mySidenav").width("0");
      $("#content").css('margin-left', '0');
      console.log('close');
      document.body.style.backgroundColor = "white";
    });
  }
  ngOnChanges(changes: any) {
  }
  
}