import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { HomeModulesComponent } from './pages/modules/home/views/home-modules/home-modules.component';
import { SolicitudHttpsListComponent } from './pages/modules/solicitud-https/views/solicitud-https.list/solicitud-https.list.component';


const routes: Routes = [
  {
    path: 'home',
    component: HomeModulesComponent
  },
  {
    path: 'home/solicitudes-https',
    component: SolicitudHttpsListComponent
  },
  {
    path: 'message/:id',
    loadChildren: () => import('./view-message/view-message.module').then( m => m.ViewMessagePageModule)
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
