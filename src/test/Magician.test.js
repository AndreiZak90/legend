import Magician from "../js/Magician";
test("Class check Magician", () => {
  const examination = {
    name: "name",
    type: "Magician",
    health: 100,
    level: 1,
    attack: 10,
    defence: 40,
  };

  const magician = new Magician("name", "Magician");
  expect(magician).toEqual(examination);
});
