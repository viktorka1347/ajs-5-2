import Zombie from '../Zombie';

test('Должен создаваться объект класса Zombie с требуемыми свойствами', () => {
  const zombie = {
    name: 'Вася',
    type: 'Zombie',
    health: 100,
    level: 1,
    attack: 40,
    defence: 10,
  };
  expect(new Zombie('Вася')).toEqual(zombie);
});