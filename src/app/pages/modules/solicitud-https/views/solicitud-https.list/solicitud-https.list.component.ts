import { Component, OnInit } from '@angular/core';
import { SolicitudesService } from '../../services/solicitudes.service';

@Component({
  selector: 'app-solicitud-https.list',
  templateUrl: './solicitud-https.list.component.html',
  styleUrls: ['./solicitud-https.list.component.scss'],
})
export class SolicitudHttpsListComponent  implements OnInit {

  constructor(
    private solicitudesService : SolicitudesService
  ) { }

  ngOnInit() {
    this.getHttps();
    this.getHttp();
  }
  respuestahttps : any [] = []
  getHttps(){
    this.solicitudesService.getHttps().subscribe(
      response => {
        this.respuestahttps = response;
        console.log("HTTPS",response);
        

      }, err => {
        alert(JSON.stringify(err))
      }
    )
  }

  getHttp() {
    this.solicitudesService.getHttp().subscribe(
      response => {
        console.log("HTTP",response);
        

      }, err => {
        alert(JSON.stringify(err))
      }
    )
  }
} 
