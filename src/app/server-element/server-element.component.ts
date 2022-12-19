import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-server-element',
  templateUrl: './server-element.component.html',
  styleUrls: ['./server-element.component.css']
})
export class ServerElementComponent implements OnInit {

  @Input('srvElement') element : {type: string, name:string, content:string};
  //Input decorator is used so that element is globally available to every other component

  constructor() {
    console.log('Constructor called!!');
   }

  ngOnInit(): void {
    console.log('ngOnInit called!!');
  }

}
