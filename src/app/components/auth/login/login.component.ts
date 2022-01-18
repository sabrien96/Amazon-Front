import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from 'src/app/shared/interfaces/user';
import { AuthService } from 'src/app/shared/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  user = new User("","","","")
  constructor(
    private router: Router,
    private authServ:AuthService
  ) { }

  ngOnInit(): void {
  }
  stopPropagation(event: any): void
  {
      event.stopPropagation();
  }
  navigateToLogeIn() {
    this.router.navigate(['/auth/signup']);
  }
  login(){
    this.authServ.loginUser(this.user).subscribe(
      data=>console.log('success',data),
      error=>console.log('Error!',error)
    )
  }
}
