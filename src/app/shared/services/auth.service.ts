import { Injectable } from '@angular/core';
import { environment as env } from './../../../environments/environment';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { User } from '../interfaces/user';
import { catchError, Observable, throwError } from 'rxjs'
import { EmailValidator } from '@angular/forms';
@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) { }

  addUser(user: User):Observable<User> {
    return this.http.post<User>(`${env.api}users/register`,user).pipe(
      catchError(err=>{return throwError(err.message);})
    );
  }
  loginUser(user:User){
    return this.http.post<User>(`${env.api}users/authenticate`,user).pipe(
      catchError(err=>{return throwError(err.message);})
    );
  }
}
//`${env.api}users/authenticate`,{...user}
//user{email,password}