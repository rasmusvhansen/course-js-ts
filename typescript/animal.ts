export interface Crushinator {
  title: string;
  canCrushAMouse(): boolean; // if heavy and not sea animal
  canCrushAHuman(): boolean; // make optional so Animal does not need to implement it
}

export class Animal implements Crushinator {
  constructor(name: string, species: string, weightInGrams: number, domain: 'land' | 'air' | 'sea') {}

  get title() {
    return `${this.name} the ${this.species}`;
  }

  private isHeavy() {
    return this.weightInGrams > 2000;
  }
}
