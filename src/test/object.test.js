import Zombie from "../js/Zombie";
import propertySorting from "../object/object";

test("test defold copy object", () => {
  const types = [
    "Bowerman",
    "Swordsman",
    "Magician",
    "Daemon",
    "Undead",
    "Zombie",
  ];
  const myZombie = new Zombie("Arthur", "Zombie");
  myZombie.attack = 70;
  myZombie.defence = 25;

  const newZombie = propertySorting(myZombie, types);

  const result = [
    { key: "attack", value: 70 },
    { key: "defence", value: 25 },
    { key: "health", value: 100 },
    { key: "level", value: 1 },
    { key: "name", value: "Arthur" },
    { key: "type", value: "Zombie" },
  ];

  expect(newZombie).toEqual(result);
});

test("testing arrey and sorting it", () => {
  const obj = {
    name: "мечник",
    health: 10,
    level: 2,
    attack: 80,
    defence: 40,
  };
  const result = [
    { key: "name", value: "мечник" },
    { key: "level", value: 2 },
    { key: "attack", value: 80 },
    { key: "defence", value: 40 },
    { key: "health", value: 10 },
  ];
  expect(propertySorting(obj, ["name", "level"])).toEqual(result);
});
