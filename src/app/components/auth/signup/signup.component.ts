import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from 'src/app/shared/interfaces/user';
import { AuthService } from 'src/app/shared/services/auth.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {
  // user = new User("","","","","")
  user = new User("","","","")

  constructor(
    private router: Router,
    private authSer:AuthService
  ) { }

  ngOnInit(): void {
  }
  signup(userData:User)
  {
    this.authSer.addUser(userData).subscribe(
      data =>console.log('success',data),
      error=>console.log('Error!',error)
    )
  }
  navigateToloLogin() {
    this.router.navigate(['/']);
  }
  
}
