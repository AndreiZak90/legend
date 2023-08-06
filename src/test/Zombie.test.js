import Zombie from "../js/Zombie";

test("Class check Zombie", () => {
  const examination = {
    name: "name",
    type: "Zombie",
    health: 100,
    level: 1,
    attack: 40,
    defence: 10,
  };
  const zombil = new Zombie("name", "Zombie");
  expect(zombil).toEqual(examination);
});
