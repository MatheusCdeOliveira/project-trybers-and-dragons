import { EnergyType } from '../Energy';
import Archetype from './Archetype';

class Mage extends Archetype {
  static createdMageInstances = 0;

  constructor(
    name: string,
    public _energyType: EnergyType = 'mana',
  ) {
    super(name);
    Mage.createdMageInstances += 1;
  }

  get energyType(): EnergyType {
    return this._energyType;
  }

  static createdArchetypeInstances(): number {
    return Mage.createdMageInstances;
  }
}

export default Mage;