import Race from './Race';

export default class Dwarf extends Race {
  static dwarfCreatedInstances = 0;

  constructor(
    name: string,
    dexterity: number, 
    private _maxLifePoints: number = 80,
  ) {
    super(name, dexterity);
    Dwarf.dwarfCreatedInstances += 1;
  }

  get maxLifePoints(): number {
    return this._maxLifePoints;
  }

  static createdRacesInstances(): number {
    return Dwarf.dwarfCreatedInstances;
  }
}
