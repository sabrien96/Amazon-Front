import { UserData } from './../../../shared/my-classes/user.class';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {
  userData:UserData=new UserData('sabrien','saber','sabriensaber0@gmail.com','01143775601')
  constructor() { 
   
  }

  ngOnInit(): void {
  }
  

}
