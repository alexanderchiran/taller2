import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-directiva',
  templateUrl: './directiva.component.html',
  //styleUrls: ['./directiva.component.css']
  styles: [`
    .onlineEstilo{
      color: white;
    }
  `]
})
export class DirectivaComponent implements OnInit {
  serverName = '';
  serverCreationStatus = '';
  serverCreated = false;
  serverStatus = 'offline';

  constructor() { }

  ngOnInit(): void {
  }

  onCreateServer() {
    this.serverStatus = 'enlinea';
    this.serverCreated = true;
    this.serverCreationStatus = 'El servidor fue creado ' + this.serverName;
  }

  getColor() {
    return this.serverCreated ? 'green' : 'red';
  }
}
