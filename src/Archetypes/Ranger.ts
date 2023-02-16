import { EnergyType } from '../Energy';
import Archetype from './Archetype';

class Ranger extends Archetype {
  static createdRangerInstances = 0;

  constructor(
    name: string,
    public _energyType: EnergyType = 'stamina',
  ) {
    super(name);
    Ranger.createdRangerInstances += 1;
  }

  get energyType(): EnergyType {
    return this._energyType;
  }

  static createdArchetypeInstances(): number {
    return Ranger.createdRangerInstances;
  }
}

export default Ranger;