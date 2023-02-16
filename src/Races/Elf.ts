import Race from './Race';

export default class Elf extends Race {
  static elfCreatedInstances = 0;
  
  constructor(
    name: string,
    dexterity: number, 
    private _maxLifePoints: number = 99,
  ) {
    super(name, dexterity);
    Elf.elfCreatedInstances += 1;
  }

  get maxLifePoints(): number {
    return this._maxLifePoints;
  }

  static createdRacesInstances(): number {
    return Elf.elfCreatedInstances;
  }
}
