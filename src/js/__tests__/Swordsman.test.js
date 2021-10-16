import Swordsman from '../Swordsman';

test('Должен создаваться объект класса Swordsman с требуемыми свойствами', () => {
  const swordsman = {
    name: 'Вася',
    type: 'Swordsman',
    health: 100,
    level: 1,
    attack: 40,
    defence: 10,
  };
  expect(new Swordsman('Вася')).toEqual(swordsman);
});