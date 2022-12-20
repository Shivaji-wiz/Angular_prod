import { Component } from "@angular/core"; //importing decorator. Decorator are used to enhanced classes in type script
import { withLatestFrom } from "rxjs";

@Component({
    selector:'app-server',
    templateUrl:'./server.component.html',
    styles: [`
       .online{
        color : white;
       }
    `]
})

export class serverComponent {
    serverId: number = 10;
    serverStatus: string = 'offline';

    constructor() {
        this.serverStatus = Math.random() > 0.5 ? 'online' : 'offline';
    }

    getServerStatus(){
        return this.serverStatus;
    }

    getColor(){
        return this.serverStatus==='online' ? 'lightgreen' : 'pink';
    }
}