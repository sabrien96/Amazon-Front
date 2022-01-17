import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';
// declare var $: any;

@Component({
  selector: 'app-sidnav',
  templateUrl: './sidnav.component.html',
  styleUrls: ['./sidnav.component.scss']
})
export class SidnavComponent implements OnInit {
  toggleSidebar = false;
  constructor() {

  }

  ngOnInit(): void {
    $('#openbtn').on('click', () => {
      $("#mySidenav").width("250px");
      $("#main").css('margin-left', '250px');
      console.log('open');
      document.body.style.backgroundColor = "rgba(0,0,0,0.4)";
    });

    $('.closebtn').on('click', () => {
      $("#mySidenav").width("0");
      $("#main").css('margin-left', '0');
      console.log('close');
      document.body.style.backgroundColor = "white";
    });
    /* Set the width of the side navigation to 0 and the left margin of the page content to 0, and the background color of body to white */
    // function closeNav() {
    //   document.getElementById("mySidenav").style.width = "0";
    //   document.getElementById("main").style.marginLeft = "0";
    //   document.body.style.backgroundColor = "white";
    // }

    // });
  }
  ngOnChanges(changes: any) {
  }

}
