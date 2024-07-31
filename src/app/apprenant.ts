export class Apprenant {
  constructor(private prenom: string, private nom: string) { }
  get getPrenom(): string { return this.prenom; }
  set setPrenom(prenom: string) { this.prenom = prenom; }
  get getNom(): string { return this.nom; }
  set setNom(nom: string) { this.nom = nom; }
}
