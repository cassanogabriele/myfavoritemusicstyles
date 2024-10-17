/*
Faire en sorte que "AppComponent" centralise les données de plusieurs FaceSnaps, génère une instance du "component" pour chaque FaceSnap, 
et injecte le FaceSnapp à cette instance.
*/
import { Component, OnInit, Input  } from '@angular/core';
// Importation du model créé
import { FaceSnap } from '../models/face-snap.model';
import { FaceSnapsService } from '../services/face-snaps.service';

/*
Un décorateur permet d'apporter des modifications à une classse. @Component vient ajouter tous les comportements 
nécessaires à l'utilisation de ce composant dans l'application.
*/
@Component({
  selector: 'app-face-snap',
  templateUrl: './face-snap.component.html',
  styleUrls: ['./face-snap.component.scss']
})
export class FaceSnapComponent implements OnInit {
  // Injecter le service
  constructor(private faceSnapsService: FaceSnapsService) {}

  // Ajout de propriétés correspondant aux différentes propriétés d'un FaceSnap
 
  // Moyen d'identifier un FaceSnap
  id!: number;
  title!: string;
  description!: string;
  createdDate!: Date;
  snaps!: number;
  location?: string;
  formattedDate!: string;
  
  imageUrl!: string;
  // Rendre le bouton dynamique 
  buttonText!: string;

  // Pour qu'une propriété puisse être injectée depuis l'extérieur d'un "component", il faut lui ajouter le 
  // décorateur "@Input".
  @Input() faceSnap!: FaceSnap;


  // Méthode qui initialise les propriétés
  ngOnInit(): void {
    // Initialisation des propriétés
    this.title = 'Archibald';
    this.description = 'Mon meilleur ami depuis tout petit !';
    this.createdDate = new Date();
    this.snaps = 6;
    this.imageUrl = 'https://cdn.pixabay.com/photo/2015/05/31/16/03/teddy-bear-792273_1280.jpg';
    this.buttonText = 'Approuvé!';

    // Formatage personnalisé de la date
    this.formattedDate = this.formatDate(this.createdDate);
  }

  // Fonction pour formater la date manuellement
  formatDate(date: Date): string {
    const options: Intl.DateTimeFormatOptions = {
      year: 'numeric', month: 'long', day: 'numeric',
      hour: '2-digit', minute: '2-digit'
    };
    return date.toLocaleDateString('fr-FR', options); // Locale 'fr-FR' pour format français
  }

  // Gestion de l'événement du bouton cliqué 
  onSnap() {
    // Le bouton a été cliqué
    if (this.buttonText === 'Approuvé!') {
      // Appel de la méthode du service en utilisant l'identifiant du "faceSnap" actuel, cela incrémente lecompteur
      this.faceSnapsService.snapFaceSnapById(this.faceSnap.id, 'snap');
      // Modification de la valeur du bouton pour indiquer qu'on peut "unsnapper" ou annuler un "snap"
      this.buttonText = 'Oops, pas approuvé!';
    } else {
      // Le bouton a été cliqué pour "unsnapper" ou annuler un "snap" sur un "faceSnap". On décrémente le compteur de "snap"
      // du "faceSnap" actuel
      this.faceSnap.snaps--;
      // On change le texte du bouton pour indiquer qu'on peut "snapper" à nouveau
      this.buttonText = 'Approuvé!';
    }
  } 
}
