import { Component } from '@angular/core';

@Component({
  selector: 'app-servers',
  //selector: '[app-servers]',
  //selector: '.app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent {
  allowServer = false;
  serverCreationStatus = "No server created yet.";
  serverName = "";
  username = "";
  serverCreated = false;
  servers = ['TestServer','TestServer 2'];
  secretStat = false;
  timeStamp = [];
  time = 1;

  constructor(){
    setTimeout(() => {
      this.allowServer = true;
    },2000)
  }

  ngOnInit() {

  }

  onCreateServer() {
    this.serverCreated = true;
    this.servers.push(this.serverName);
    this.serverCreationStatus = "Server is created ! Name is "+ this.serverName;
  }

  // onUpdateServer(event: Event){
  //   this.serverName = (<HTMLInputElement>event.target).value;
  // }

  onToggleDisplay(){
    this.secretStat = !this.secretStat;
    this.timeStamp.push(this.timeStamp.length+1);

  }

}
