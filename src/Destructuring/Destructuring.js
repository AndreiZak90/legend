export default function specialAttack(character) {
  const newArraySpecialAttack = [];

  for (const attack of character.special) {
    const { id, name, description, icon } = attack;
    newArraySpecialAttack.push({
      id,
      name,
      description:
        description !== undefined ? description : "Описание недоступно",
      icon,
    });
  }

  return newArraySpecialAttack;
}
