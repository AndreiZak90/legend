import Bowerman from "../js/Bowerman";
test("Class check Bowman", () => {
  const examination = {
    name: "name",
    type: "Bowman",
    health: 100,
    level: 1,
    attack: 25,
    defence: 25,
  };

  const bowerman = new Bowerman("name", "Bowman");
  expect(bowerman).toEqual(examination);
});
