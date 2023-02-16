import { EnergyType } from '../Energy';
import Archetype from './Archetype';

class Necromancer extends Archetype {
  static createdNecromancerInstances = 0;

  constructor(
    name: string,
    public _energyType: EnergyType = 'mana',
  ) {
    super(name);
    Necromancer.createdNecromancerInstances += 1;
  }

  get energyType(): EnergyType {
    return this._energyType;
  }

  static createdArchetypeInstances(): number {
    return Necromancer.createdNecromancerInstances;
  }
}

export default Necromancer;