import Character from "./index.js";

export default class Daemon extends Character {
  constructor(name, type, health, level, attack, defence) {
    super(name, type, health, level);
    this.attack = 10;
    this.defence = 40;
  }
}
