import Zombie from "../js/Zombie";

export default class Validator extends Zombie {
  constructor(name, type) {
    super(name, type);
  }
  validateUsername() {
    const examination = /[a-zA-Z0-9_-]+$/;
    if (
      examination.test(this.name) &&
      !/\d{4,}/.test(this.name) &&
      !/^\d|[\d_-]$/.test(this.name)
    ) {
      return this.name;
    } else {
      throw new Error("неверное ввод имени");
    }
  }
}
