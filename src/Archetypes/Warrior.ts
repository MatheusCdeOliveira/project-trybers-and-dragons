import { EnergyType } from '../Energy';
import Archetype from './Archetype';

class Warrior extends Archetype {
  static createdWarriorInstances = 0;

  constructor(
    name: string,
    public _energyType: EnergyType = 'stamina',
  ) {
    super(name);
    Warrior.createdWarriorInstances += 1;
  }

  get energyType(): EnergyType {
    return this._energyType;
  }

  static createdArchetypeInstances(): number {
    return Warrior.createdWarriorInstances;
  }
}

export default Warrior;