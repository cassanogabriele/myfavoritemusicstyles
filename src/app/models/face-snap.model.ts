/*
Ajout de propriétés personnalisées
**********************************
Création d'un premier type personnalisé sous forme de classe. Ce modèle de données FaceSnap, comportera toutes les propriétés dont on a besoin, 
et on pourra l'utiliser partout dans l'application.
*/

/*
export class FaceSnap {
  title: string;
  description: string;
  createdDate: Date;
  snaps: number;
  imageUrl: string;
  
  constructor(title: string, description: string, imageUrl: string, createdDate: Date, snaps: number) {
    this.title = title;
    this.description = description;
    this.imageUrl = imageUrl;
    this.createdDate = createdDate;
    this.snaps = snaps;
  }
}
*/

// Modèle de données : il comporte toutes les propriés q'uon peut injecter directement dans "FaceSnapComponent"

// Raccourcis TypeScript
export class FaceSnap {
  id!: number;
  title!: string;
  description!: string;
  imageUrl!: string;
  createdDate!: Date;
  snaps!: number;
  location?: string;
}