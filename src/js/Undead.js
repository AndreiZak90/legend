import Character from "./index.js";

export default class Undead extends Character {
  constructor(name, type, health, level, attack, defence) {
    super(name, type, health, level);
    this.attack = 25;
    this.defence = 25;
  }
}
