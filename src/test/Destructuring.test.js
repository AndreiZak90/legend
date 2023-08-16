import specialAttack from "../Destructuring/Destructuring";

test("should extract and format attacks correctly", () => {
  const character = {
    special: [
      {
        id: 1,
        name: "Attack 1",
        description: "Description 1",
        icon: "icon1.png",
      },
      {
        id: 2,
        name: "Attack 2",
        icon: "icon2.png",
      },
    ],
  };

  const result = specialAttack(character);

  expect(result).toEqual([
    {
      id: 1,
      name: "Attack 1",
      description: "Description 1",
      icon: "icon1.png",
    },
    {
      id: 2,
      name: "Attack 2",
      description: "Описание недоступно", // Ожидаемое значение для описания, если отсутствует
      icon: "icon2.png",
    },
  ]);
});
