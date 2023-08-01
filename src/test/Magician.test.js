import Magician from "../js/Magician";
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
