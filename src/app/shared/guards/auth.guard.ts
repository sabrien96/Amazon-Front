import { Injectable } from "@angular/core";
import {  CanActivate } from "@angular/router";
@Injectable({providedIn:'root'})
export class AuthGuard implements CanActivate{
  canActivate(): boolean  {
    console.log('in auth guard');
    
    return true;
  }

}