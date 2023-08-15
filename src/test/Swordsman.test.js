import Swordsman from "../js/Swordsman";
test("Class check Swordsman", () => {
  const examination = {
    name: "name",
    type: "Swordsman",
    health: 100,
    level: 1,
    attack: 40,
    defence: 10,
  };

  const swordman = new Swordsman("name", "Swordsman");
  expect(swordman).toEqual(examination);
});
