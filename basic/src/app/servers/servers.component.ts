import { Component, OnInit } from '@angular/core';

@Component({
  // selector: 'app-servers', 
  selector: '.app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
  
})  
export class ServersComponent implements OnInit {
  allowNewServer = false;
  serverCreationStatus = 'no server was creted!';
  serverName = 'testserver';
  serverCreated = false;
  servers = ['testserver','testserver 2']
  constructor() {
     setTimeout(() => {
       this.allowNewServer = true;

    }, 2000); 
   }

  ngOnInit() {
  }
  onCreateServer() {
    this.serverCreated = true;
    this.servers.push(this.serverName);
    this.serverCreationStatus = 'server was cretaed! name is ' +  this.serverName;
  }
  onUpadteServerName(event: Event) {
    this.serverName = (<HTMLInputElement>event.target).value;   

  } 
}
