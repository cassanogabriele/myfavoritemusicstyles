import { Component } from '@angular/core';
import { FaceSnap } from '../models/face-snap.model';
import { FaceSnapsService } from '../services/face-snaps.service';
import { ActivatedRoute } from '@angular/router';
// Importez le Router depuis '@angular/router'
import { Router } from '@angular/router'; 


@Component({
  selector: 'app-single-face-snap',
  templateUrl: './single-face-snap.component.html',
  styleUrls: ['./single-face-snap.component.scss']
})
export class SingleFaceSnapComponent {
  faceSnap!: FaceSnap;
  buttonText!: string;

  constructor(private faceSnapsService: FaceSnapsService, private route: ActivatedRoute, private router: Router) {}

  ngOnInit(){
    // Récupérer le paramètre "id" via le snapshot de la route
    const snapId = +this.route.snapshot.params['id'];

    /*
    Tous les paramètres d'une route sont de type "string" mais l'id des FaceSnaps est de type 
    "number". Il faut ajouter le "+" au début de l'expression permet de "cast" une string de nombres en 
    "number".
    */
    const stringValue: string = '341';
    const numberValue: number = +stringValue;
    this.faceSnap = this.faceSnapsService.getFaceSnapById(snapId);
  }

  onViewFaceSnap() {
    this.router.navigateByUrl(`facesnaps/${this.faceSnap.id}`);
  }
}
