import Zombie from "../js/Zombie";
import Character from "../js/Character";

test("Checking the length of the introduced name", () => {
  expect(() => new Zombie("nameLongBigLong", "Bowman")).toThrowError(
    "Имя должно быть строкой от 2 до 10 символов"
  );
});

test("Checking the introduced type", () => {
  expect(() => new Zombie("name", "InvalidType")).toThrowError(
    "Не может быть числом или не выбранно указанное значение"
  );
});

test("Checking the standard of living", () => {
  const newClass = new Zombie("name", "Bowman");
  newClass.health = 0;
  expect(() => newClass.levelUp()).toThrow("Нельзя повысить левел умершего");
});

test("Checking the standard of living", () => {
  const newClass = new Zombie("name", "Bowman");
  expect(() => newClass.damage(-10)).toThrow(
    "не является символом или значение меньше нуля"
  );
  expect(() => newClass.damage("number")).toThrow(
    "не является символом или значение меньше нуля"
  );
});

test("should increase level and reset health, attack, and defence", () => {
  const zombiLEVEL = new Zombie("name", "Bowman");
  zombiLEVEL.levelUp();

  expect(zombiLEVEL.level).toBe(2);
  expect(zombiLEVEL.health).toBe(100);
  expect(zombiLEVEL.attack).toBeCloseTo(48, 0);
  expect(zombiLEVEL.defence).toBeCloseTo(12, 0);
});

test("test levelUp умершего", () => {
  expect(() => {
    const newClass = new Zombie("name", "Bowman");
    newClass.health = 0;
    newClass.levelUp();
  }).toThrow("Нельзя повысить левел умершего");
});

test("should not reduce health below 0 on damage()", () => {
  const newClass = new Character("name", "Zombie");
  newClass.health = 8;
  newClass.defence = 10;
  newClass.damage(100);
  expect(newClass.health).toEqual(0);
});

test("should not reduce health below 0 on damage()", () => {
  const newClass = new Character("name", "Zombie");
  newClass.health = 100;
  newClass.defence = 10;
  newClass.damage(18);
  expect(newClass.health).toEqual(83.8);
});
