export function abilityModifier(ability) {
  if (ability < 3) throw new Error('Ability scores must be at least 3');
  if (ability > 18) throw new Error('Ability scores can be at most 18');
  return Math.floor((ability - 10) / 2);
}

const rollDie = (sides = 6) => Math.random() * (sides - 1) + 1;

export class Character {
  static rollAbility() {
    return [...Array(4)].map(() => rollDie()).sort().slice(1).reduce((s, d) => s + d);
  }

  constructor() {
    this.strength = Character.rollAbility();
    this.dexterity = Character.rollAbility();
    this.constitution = Character.rollAbility();
    this.intelligence = Character.rollAbility();
    this.wisdom = Character.rollAbility();
    this.charisma = Character.rollAbility();
  }

  get hitpoints() {
    return 10 + abilityModifier(this.constitution);
  }
}
