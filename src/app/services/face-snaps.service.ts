import { Injectable } from '@angular/core';
import { FaceSnap } from '../models/face-snap.model';


@Injectable({
  providedIn: 'root'
})
export class FaceSnapsService {
  faceSnaps: FaceSnap[] = [
    {
        id: 1,
        title: 'Metal',
        description: 'Mon style de musique préféré depuis que je suis adolescent. Je suis bassiste et guitariste Metal, je chante aussi du Metal.',
        imageUrl: 'https://image.lexica.art/full_webp/0b2a1a47-3993-40f9-bcb0-035078952d65',
        createdDate: new Date(),
        snaps: 0,
        location: 'Belgique'
      },
      {
        id: 2,
        title: 'Le Rock And Roll',
        description: 'Mon deuxième style de musique préférée',
        imageUrl: 'https://image.lexica.art/full_webp/09296198-766e-4013-835b-de7bc21c88e5',
        createdDate: new Date(),
        snaps: 6,
        location: 'Belgique'
      },
      {
        id: 3,
        title: 'La variété italienne',
        description: 'Ce sont mes origines, la culture de ma maman.',
        imageUrl: 'https://image.lexica.art/full_webp/13d14504-067b-4a66-bd64-12f3394d004b',
        createdDate: new Date(),
        snaps: 0
      },
      {
        id: 4,
        title: 'La variété française',
        description: 'Toute mon enfance et mon adolescence.',
        imageUrl: 'https://image.lexica.art/full_webp/0718fb5d-8d80-4c38-8e80-35f5e98ebf79',
        createdDate: new Date(),
        snaps: 0
      },
      {
        id: 5,
        title: 'Le reggae',
        description: 'La musique qui donne envie de groover.',
        imageUrl: 'https://image.lexica.art/full_webp/3d887499-febd-4c9e-a99b-5fe73016e71b',
        createdDate: new Date(),
        snaps: 2
      },
      {
        id: 6,
        title: 'La funk',
        description: 'La musique qui donne envie de bouger.',
        imageUrl: 'https://image.lexica.art/full_webp/9b480011-69c2-482b-8455-d507fe81d313',
        createdDate: new Date(),
        snaps: 2
      },
      {
        id: 7,
        title: 'La disco',
        description: 'La musique qui donne envie de danser.',
        imageUrl: 'https://image.lexica.art/full_webp/086525b6-af1c-4c70-9b52-87085d34c7bc',
        createdDate: new Date(),
        snaps: 2
      },
      {
        id: 8,
        title: 'La New Wave',
        description: 'La musique qui donne envie de chanter.',
        imageUrl: 'https://image.lexica.art/full_webp/22ebd890-b960-4d0a-9355-6341957c60f4',
        createdDate: new Date(),
        snaps: 2
      }
  ];
  
  // Retourner tous les "FaceSnaps" contenu dans le service
  getAllFaceSnaps(): FaceSnap[] {
    return this.faceSnaps;
  }

  // Retourne un "FaceSnap" si elle le trouve et sinon, elle retourne une erreur
  getFaceSnapById(faceSnapId: number): FaceSnap {
    const faceSnap = this.faceSnaps.find(faceSnap => faceSnap.id === faceSnapId);
    if(faceSnap) {
      return faceSnap
    }
    else{
      throw new Error('FaceSnap not found!');
    }
  }

  // Retourner un FaceSnap par "id", qu'elle prend en paramètre
  snapFaceSnapByIdOld(faceSnapId: number, snapType: string): void {   
    /*
    Recherche un FaceSnap dans un tableau en utilisant l'identifiant. La méthode "find" est utilisée 
    pour parcourir le tableau et trouver le premier élément qui satisfait la condition spécifiée dans 
    la fonction fléchée.
    */
   
    const faceSnap = this.faceSnaps.find(faceSnap => faceSnap.id === faceSnapId);
    
    // Vérifie si un "faceSnap" a été trouvé avec l'identifiant spécifié
    if (faceSnap) {
      // On incrémente le compteur "snaps" de ce "faceSnap"
      faceSnap.snaps++;
    } else {
      // Sinon, aucun "faceSnap" n'est trouvé, et on génère une erreur
      throw new Error('FaceSnap not found!');
    }
  }

  // Préciser les types avec les Literal Types

  // Limiter les possibilités de passer n'importe quelle chaîne de caractères à la méthoden, on remplace
  // le type "string" par un Literal Type pour ne pouvoir passer que "snap" ou "unsnap".
  snapFaceSnapById(faceSnapId: number, snapType: 'snap' | 'unsnap'): void {
    // Utilisation de la fonction "getFaceSnapById" pour récupérer le "FaceSnap", et si leu deuxième argument 
    // est "snap", on rajoute un "snap", sinon on enlève un "snap".
    const faceSnap = this.getFaceSnapById(faceSnapId);
    snapType === 'snap' ? faceSnap.snaps++ : faceSnap.snaps--;
  }

  
  // Opération inverse de "snapFaceSnapById"
  unsnapFaceSnapById(faceSnapId: number): void {
    const faceSnap = this.faceSnaps.find(faceSnap => faceSnap.id === faceSnapId);
    
    // Si un "faceSnap" a été trouvé avec l'identifiant spécifié
    if (faceSnap) {
      // On décrémente le compteur "snaps" de ce "faceSnap"
      faceSnap.snaps--;
    } else {
      // Sinon, aucun "faceSnap" n'est trouvé, et on génère une erreur
      throw new Error('FaceSnap not found!');
    }
  }
}