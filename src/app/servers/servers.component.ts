import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {
  allowNewServer = false;
  serverCreationStatus = 'No se creó ningún servidor';
  cambio = true;
  serverName ='';
  nombre='';
  servers=['TestServer','TesetServer 2'];
  showSecret=false;
  log=[];
  log2=[];

  items= {
    title: 'Foot Ball',
    price: 700
  };

  constructor() {
    /*setTimeout(() => {
      this.allowNewServer = true;
    }, 2000);*/

  }

  ngOnInit(): void {
  }

  onCreateServer() {
      this.servers.push(this.serverName);
      this.serverCreationStatus = 'El servidor fue creado '+this.serverName;       
  }

  onUpdateServerName(event: Event){
    this.serverName = (<HTMLInputElement>event.target).value;
    //console.log(event);
  }

  onToggleDetails(){
    this.showSecret= !this.showSecret;
    this.log.push(this.log.length+1);
    this.log2.push(new Date());
  }

}
