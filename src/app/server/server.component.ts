import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-server',
  templateUrl: './server.component.html',
  styleUrls: ['./server.component.css']
})
export class ServerComponent implements OnInit {

  serverId: number = 10;
  serverStatus: string = 'offline';
  contador = 0;

  getServerStatus() {
    this.contador++;
    return this.serverStatus + ' ...';
  }

  getColor() {
    return this.contador ==5?'red':'green';
    //return Math.random() > 0.5 ? 'green': 'red';    
  }

  constructor() { 
  
  }

  ngOnInit(): void {
  }

}
