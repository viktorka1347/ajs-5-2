import Magician from '../Magician';

test('Должен создаваться объект класса Magician с требуемыми свойствами', () => {
  const magician = {
    name: 'Вася',
    type: 'Magician',
    health: 100,
    level: 1,
    attack: 10,
    defence: 40,
  };
  expect(new Magician('Вася')).toEqual(magician);
});