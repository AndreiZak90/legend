import Character from "../index.js";

export default class Zombie extends Character {
  constructor(name, type, health, level, attack, defence) {
    super(name, type, health, level);
    this.attack = 40;
    this.defence = 10;
  }
}
