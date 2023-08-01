import Daemon from "../js/Daemon";

test("Class check fail", () => {
  const name = "name";
  const typee = "Bowman";
  const examination = { name: "name", type: "Bowman", health: 100, level: 1 };

  const character = new Daemon(name, typee);
  expect(character).toEqual(examination);
});

test("Checking the length of the introduced name", () => {
  const name = "nameLongBigLong";
  const typee = "Bowman";

  expect(() => new Daemon(name, typee)).toThrowError(
    "Имя должно быть строкой от 2 до 10 символов"
  );
});

test("Checking the introduced type", () => {
  const name = "name";
  const typee = "InvalidType";

  expect(() => new Daemon(name, typee)).toThrowError("Ошибка");
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
