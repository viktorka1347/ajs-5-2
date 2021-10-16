import Undead from '../Undead';

test('Должен создаваться объект класса Undead с требуемыми свойствами', () => {
  const undead = {
    name: 'Вася',
    type: 'Undead',
    health: 100,
    level: 1,
    attack: 25,
    defence: 25,
  };
  expect(new Undead('Вася')).toEqual(undead);
});