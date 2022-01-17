import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class StoreService {
  private overlayListener = new Subject<boolean>();
  private cartCountListener = new Subject<number>();
  constructor() {

  }

  // listener for adding overlay when focus on input search 
  getOverlayistner() {
    return this.overlayListener.asObservable()
  }
  setOverlayListener(flag: boolean) {
    this.overlayListener.next(flag)
  }
  // listener for increment or decrement cart count
  getCartCountListner() {
    return this.cartCountListener.asObservable()
  }
  setCartCountListener(count: number) {
    this.cartCountListener.next(count)
  }
}
