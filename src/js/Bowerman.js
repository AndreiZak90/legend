import Character from "./index";
export default class Bowerman extends Character {
  constructor(name, type, health, level, attack, defence) {
    super(name, type, health, level);
    this.attack = 25;
    this.defence = 25;
  }
}
