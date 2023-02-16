import Race from './Race';

export default class Orc extends Race {
  static orcCreatedInstances = 0;
  
  constructor(
    name: string,
    dexterity: number, 
    private _maxLifePoints: number = 74,
  ) {
    super(name, dexterity);
    Orc.orcCreatedInstances += 1;
  }

  get maxLifePoints(): number {
    return this._maxLifePoints;
  }

  static createdRacesInstances(): number {
    return Orc.orcCreatedInstances;
  }
}
