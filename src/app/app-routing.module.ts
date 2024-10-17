/*
Les Single Page Applications (SPA) permettent une performance supérieure en enlevant le besoin d'une applicaiton de demander,
recevoir, puis afficher une apge HTML à chaque changement d'URL. Angular permet avec le routing de créer une SPA : à chaque URL 
correspondra un "component", et Angular remplacera le "component" actif, sans émettre de requête au serveur. 
*/
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {FaceSnapListComponent} from "./face-snap-list/face-snap-list.component";
import { LandingPageComponent } from './landing-page/landing-page.component';
import { SingleFaceSnapComponent } from './single-face-snap/single-face-snap.component';

// Module de routing : tableau de type "Routes" qui contient les routes de l'application
const routes: Routes = [
  // Enregistrements des composants à afficher

  // Une route est un objet qui spécifie le "component" à afficher pour chaque route
  { path: 'facesnaps/:id', component: SingleFaceSnapComponent },
  { path: 'facesnaps', component: FaceSnapListComponent },
  { path: '', component: LandingPageComponent },
];

@NgModule({
  // Enregistrer les routes dans le routeur Angular
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
