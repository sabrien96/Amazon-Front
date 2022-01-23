import { AuthService } from 'src/app/shared/services/auth.service';
import { Component, OnInit } from '@angular/core';
import { User } from '../../../shared/interfaces/user';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {
  userData:User=new User('','','','')
  constructor(private authServe:AuthService) { 
    this.getUserInfo();
  }

  ngOnInit(): void {
  }
  getUserInfo(){
   let userId=localStorage.getItem('userId');
   if(userId!=null){
     this.authServe.getUserById(userId).subscribe((response)=>{
       this.userData=response;
     })
   }
  }

}
