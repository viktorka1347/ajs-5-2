import Bowman from '../Bowman';

test('Должен создаваться объект класса Bowman с требуемыми свойствами', () => {
  const bowman = {
    name: 'Вася',
    type: 'Bowman',
    health: 100,
    level: 1,
    attack: 25,
    defence: 25,
  };
  expect(new Bowman('Вася')).toEqual(bowman);
});