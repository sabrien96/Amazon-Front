import { Component, Input, OnInit } from '@angular/core';
import * as $ from 'jquery';

@Component({
  selector: 'app-swipper',
  templateUrl: './swipper.component.html',
  styleUrls: ['./swipper.component.scss']
})
export class SwipperComponent implements OnInit {
  @Input() list: any;
  @Input() compenentName: any;
  items = [
    {
      stock: "AAPL",
      img: "../.././../../assets/img/1.jpg"
    },
    {
      stock: "F",
      img: "../.././../../assets/img/2.jpg"
    },
    {
      stock: "Q",
      img: "../.././../../assets/img/3.jpg"
    },
    {
      stock: "W",
      img: "../.././../../assets/img/4.jpg"
    },
    {
      stock: "E",
      img: "../.././../../assets/img/5.jpg"
    },
    {
      stock: "T",
      img: "../.././../../assets/img/6.jpg"
    },
    {
      stock: "Y",
      img: "../.././../../assets/img/3.jpg"
    }
  ]
  startIndex: any;
  lastIndex: any;
  mediator: any[] = [];
  constructor() {

    if (this.items.length !== 0) {
      for (let i = 0; i < 4; i++) {
        this.mediator.push(this.items[i]);
      }
      this.startIndex = 0;
      this.lastIndex = this.mediator.length - 1;
    }
    setInterval(()=>{
      this.rightClick();
      console.log('timers');

    },5000)
  }

  ngOnInit(): void {

  }

  leftClick() {
    if (this.startIndex === 0) {
      this.startIndex = this.items.length - 1
      this.lastIndex--
      this.mediator.unshift(this.items[this.items.length - 1])
      this.mediator.pop()
    }
    else if (this.lastIndex === 0) {
      this.lastIndex = this.items.length - 1
      this.startIndex--
      this.mediator.unshift(this.items[this.startIndex])
      this.mediator.pop()
    }
    else {
      this.startIndex--
      this.lastIndex--
      this.mediator.unshift(this.items[this.startIndex])
      this.mediator.pop()
    }
    console.log('left');

    console.log('start ', this.startIndex, 'last ', this.lastIndex)
    return
  }

  rightClick() {
    if (this.lastIndex === this.items.length - 1) {
      this.lastIndex = 0
      this.startIndex++
      this.mediator.shift()
      this.mediator.push(this.items[0])
    }
    else if (this.startIndex === this.items.length - 1) {
      this.startIndex = 0
      this.lastIndex++
      this.mediator.shift()
      this.mediator.push(this.items[this.lastIndex])
    }
    else {
      this.startIndex++
      this.lastIndex++
      this.mediator.shift()
      this.mediator.push(this.items[this.lastIndex])
    }
    console.log('right');

    console.log('start ', this.startIndex, 'last ', this.lastIndex)
    return
  }

}
