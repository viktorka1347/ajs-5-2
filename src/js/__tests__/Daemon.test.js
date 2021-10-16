import Daemon from '../Daemon';

test('Должен создаваться объект класса Daemon с требуемыми свойствами', () => {
  const daemon = {
    name: 'Вася',
    type: 'Daemon',
    health: 100,
    level: 1,
    attack: 10,
    defence: 40,
  };
  expect(new Daemon('Вася')).toEqual(daemon);
});