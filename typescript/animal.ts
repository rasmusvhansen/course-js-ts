export interface Crushinator {
  title: string;
  canCrushAMouse(): boolean; // if heavy and not sea animal
  canCrushAHuman?(): boolean; // make optional so Animal does not need to implement it
}

export class Animal implements Crushinator {
  constructor(
    private name: string,
    private species: string,
    private weightInGrams: number,
    private domain: 'land' | 'air' | 'sea' = 'land'
  ) {}

  get title() {
    return `${this.name} the ${this.species}`;
  }

  canCrushAMouse(): boolean {
    return this.isHeavy() && this.domain !== 'sea';
  }

  private isHeavy() {
    return this.weightInGrams > 2000;
  }
}
