import Undead from "../js/Undead";
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
