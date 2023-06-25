import { Component } from '@angular/core';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent {
  allowNewServer = false;
  serverCreationStatus = 'No server was created!';
  serverName = 'Test Server';
  userName = 'DefaultUser'
  ifUserName = false;
  constructor() {
    setTimeout(()=>{
      this.allowNewServer = true; 
    }, 2000);
  }
  onCreateServer(){
    this.serverCreationStatus = 'Server was created! Name is' + this.serverName;
  }
  OnUpdateServerName(event: Event){
      console.log(event);
      this.serverName = (<HTMLInputElement>event.target).value;
  }
  ResetUser(){
    this.userName = '';
  }
}
