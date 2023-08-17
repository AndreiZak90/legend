import Validator from "../validator/validator";

test("valid name", () => {
  const namePerson = new Validator("normal", "Zombie");
  expect(namePerson.validateUsername()).toBe("normal");
});

test("not a valid name", () => {
  const namePerson = new Validator("5arrr", "Zombie");
  const fon = () => namePerson.validateUsername();
  expect(fon).toThrowError("неверное ввод имени");
});
