import Character from "../js/index";
import Bowerman from "../js/Bowerman";
import Swordsman from "../js/Swordsman";
import Magician from "../js/Magician";
import Undead from "../js/Undead";
import Daemon from "../js/Daemon";
import Zombie from "../js/Zombie";

test("Class check fail", () => {
  const name = "name";
  const typee = "Bowman";
  const examination = { name: "name", type: "Bowman", health: 100, level: 1 };

  const character = new Character(name, typee);
  expect(character).toEqual(examination);
});

test("Class check Bowman", () => {
  const name = "name";
  const typee = "Bowman";
  const examination = {
    name: "name",
    type: "Bowman",
    health: 100,
    level: 1,
    attack: 25,
    defence: 25,
  };

  const bowerman = new Bowerman(name, typee);
  expect(bowerman).toEqual(examination);
});

test("Class check Swordsman", () => {
  const name = "name";
  const typee = "Swordsman";
  const examination = {
    name: "name",
    type: "Swordsman",
    health: 100,
    level: 1,
    attack: 40,
    defence: 10,
  };

  const swordman = new Swordsman(name, typee);
  expect(swordman).toEqual(examination);
});

test("Class check Magician", () => {
  const name = "name";
  const typee = "Magician";
  const examination = {
    name: "name",
    type: "Magician",
    health: 100,
    level: 1,
    attack: 10,
    defence: 40,
  };

  const magician = new Magician(name, typee);
  expect(magician).toEqual(examination);
});

test("Class check Undead", () => {
  const name = "name";
  const typee = "Undead";
  const examination = {
    name: "name",
    type: "Undead",
    health: 100,
    level: 1,
    attack: 25,
    defence: 25,
  };

  const undead = new Undead(name, typee);
  expect(undead).toEqual(examination);
});

test("Class check Daemon", () => {
  const name = "name";
  const typee = "Daemon";
  const examination = {
    name: "name",
    type: "Daemon",
    health: 100,
    level: 1,
    attack: 10,
    defence: 40,
  };

  const deamon = new Daemon(name, typee);
  expect(deamon).toEqual(examination);
});

test("Class check Zombie", () => {
  const name = "name";
  const typee = "Zombie";
  const examination = {
    name: "name",
    type: "Zombie",
    health: 100,
    level: 1,
    attack: 40,
    defence: 10,
  };

  const zombie = new Zombie(name, typee);
  expect(zombie).toEqual(examination);
});

test("should increase level and reset health, attack, and defence", () => {
  const name = "name";
  const typee = "Daemon";
  const newClass = new Daemon(name, typee);
  newClass.levelUp();

  expect(newClass.level).toBe(2);
  expect(newClass.health).toBe(100);
  expect(newClass.attack).toBeCloseTo(12, 0);
  expect(newClass.defence).toBeCloseTo(48, 0);
});

test("Checking the length of the introduced name", () => {
  const name = "nameLongBigLong";
  const typee = "Bowman";

  expect(() => new Character(name, typee)).toThrowError(
    "Имя должно быть строкой от 2 до 10 символов"
  );
});

test("Checking the introduced type", () => {
  const name = "name";
  const typee = "InvalidType";

  expect(() => new Character(name, typee)).toThrowError("Ошибка");
});

test("Checking the standard of living", () => {
  const name = "name";
  const typee = "Bowman";
  const newClass = new Daemon(name, typee);
  newClass.health = 0;
  expect(() => newClass.levelUp()).toThrow("Нельзя повысить левел умершего");
});

test("Checking the standard of living", () => {
  const name = "name";
  const typee = "Bowman";
  const newClass = new Daemon(name, typee);
  expect(() => newClass.damage(-10)).toThrow(
    "не является символом или значение меньше нуля"
  );
  expect(() => newClass.damage("number")).toThrow(
    "не является символом или значение меньше нуля"
  );
});

test("should not reduce health below 0 on damage()", () => {
  const name = "name";
  const typee = "Bowman";
  const newClass = new Daemon(name, typee);
  newClass.health = 10;
  const damage = 20;
  newClass.damage(damage);
  expect(newClass.health).toBe(0);
});
