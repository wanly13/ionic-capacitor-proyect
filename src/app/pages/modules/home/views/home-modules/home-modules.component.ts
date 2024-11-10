import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { RefresherCustomEvent } from '@ionic/angular';

@Component({
  selector: 'app-home-modules',
  templateUrl: './home-modules.component.html',
  styleUrls: ['./home-modules.component.scss'],
})
export class HomeModulesComponent   {
  constructor(
    private router : Router
  ){}


  opcionesTuristicas = [
    {
      nombre: 'Solicitudes',
      descripcion: 'Realizar peticiones http y https',
      icono: 'sunny',
      routerlink : 'solicitudes-https'
    },
    {
      nombre: 'Montañas',
      descripcion: 'Explora rutas de senderismo',
      icono: 'trail-sign'
    },
    {
      nombre: 'Ciudades',
      descripcion: 'Visita lugares históricos',
      icono: 'business'
    },
    {
      nombre: 'Gastronomía',
      descripcion: 'Prueba la cocina local',
      icono: 'restaurant'
    },
    {
      nombre: 'Aventura',
      descripcion: 'Actividades emocionantes',
      icono: 'bicycle'
    },
    {
      nombre: 'Cultura',
      descripcion: 'Museos y eventos culturales',
      icono: 'color-palette'
    }
  ];
  
  refresh(ev: any) {
    setTimeout(() => {
      (ev as RefresherCustomEvent).detail.complete();
    }, 3000);
  }

  seleccionarOpcion(opcion: any) {
    this.router.navigate(['home', opcion.routerlink])
    // Aquí puedes agregar la lógica para navegar a la página correspondiente
    // o mostrar más detalles sobre la opción seleccionada
  }
}
