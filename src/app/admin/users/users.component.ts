import { OrderService } from './../../shared/services/order.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {
userOrdersList:any;
showFlag:boolean=false;
  constructor(private orderServe:OrderService) { }

  ngOnInit(): void {
  }
  getUserOrders(userId:any){
    this.orderServe.getOrdersByUserID(userId).subscribe((response)=>{
      this.userOrdersList=response;
      this.showFlag=true;
    });
    
  }
}
