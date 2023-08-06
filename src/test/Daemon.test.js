import Daemon from "../js/Daemon";
test("Class check Daemon", () => {
  const examination = {
    name: "name",
    type: "Daemon",
    health: 100,
    level: 1,
    attack: 10,
    defence: 40,
  };

  const deamon = new Daemon("name", "Daemon");
  expect(deamon).toEqual(examination);
});
