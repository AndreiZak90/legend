import Undead from "../js/Undead";
test("Class check Undead", () => {
  const examination = {
    name: "name",
    type: "Undead",
    health: 100,
    level: 1,
    attack: 25,
    defence: 25,
  };

  const undead = new Undead("name", "Undead");
  expect(undead).toEqual(examination);
});
