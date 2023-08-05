import Zombie from "../js/Zombie";

test("Checking the length of the introduced name", () => {
  const name = "nameLongBigLong";
  const typee = "Bowman";
  expect(() => new Zombie(name, typee)).toThrowError(
    "Имя должно быть строкой от 2 до 10 символов"
  );
});

test("Checking the introduced type", () => {
  const name = "name";
  const typee = "InvalidType";

  expect(() => new Zombie(name, typee)).toThrowError("Ошибка");
});

test("Checking the standard of living", () => {
  const name = "name";
  const typee = "Bowman";
  const newClass = new Zombie(name, typee);
  newClass.health = 0;
  expect(() => newClass.levelUp()).toThrow("Нельзя повысить левел умершего");
});

test("Checking the standard of living", () => {
  const name = "name";
  const typee = "Bowman";
  const newClass = new Zombie(name, typee);
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
  const newClass = new Zombie("name", "Zombie");
  newClass.health = 10;
  const damage = 20;
  newClass.damage(damage);
  expect(newClass.health).toEqual(0);
});
