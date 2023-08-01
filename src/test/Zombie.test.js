import Zombie from "../js/Zombie";
test("Class check Zombie", () => {
  const name = "name";
  const typee = "Zombie";
  const examination = {
    name: "name",
    type: "Zombie",
    health: 100,
    level: 1,
    attack: 40,
    defence: 10,
  };

  const zombie = new Zombie(name, typee);
  expect(zombie).toEqual(examination);
});

test("should increase level and reset health, attack, and defence", () => {
  const name = "name";
  const typee = "Zombie";
  const newClass = new Character(name, typee);
  newClass.levelUp();

  expect(newClass.level).toBe(2);
  expect(newClass.health).toBe(100);
  expect(newClass.attack).toBeCloseTo(12, 0);
  expect(newClass.defence).toBeCloseTo(48, 0);
});

test("should not reduce health below 0 on damage()", () => {
  const name = "name";
  const typee = "Zombie";
  const newClass = new Character(name, typee);
  newClass.health = 10;
  const damage = 20;
  newClass.damage(damage);
  expect(newClass.health).toBe(0);
});
