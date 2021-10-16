import Character from '../Character';

test('Должен создаваться объект класса Character', () => {
  expect(new Character('Вася', 'Bowman')).toBeDefined();
});

test('Должна выбрасываться ошибка при некорректном имени героя', () => {
  expect(() => new Character(56, 'Bowman')).toThrowError('Нет имени героя');
  expect(() => new Character('В', 'Bowman')).toThrowError('Слишком короткое имя героя');
  expect(() => new Character('Васисуалий Лоханкин', 'Bowman')).toThrowError('Слишком длинное имя героя');
});

test('Должна выбрасываться ошибка при несуществующем типе героя', () => {
  expect(() => new Character('Вася', 'Killer')).toThrowError('Несуществующий тип героя');
});

test('Герой должен переходить на новый уровень', () => {
  const daemon = new Character('Вася', 'Daemon');
  daemon.attack = 10;
  daemon.defence = 40;
  daemon.health = 1;
  daemon.levelUp();

  const newDaemon = {
    name: 'Вася',
    type: 'Daemon',
    health: 100,
    level: 2,
    attack: 12,
    defence: 48,
  };
  expect(daemon).toEqual(newDaemon);
});

test('Мёртвый герой не должен переходить на новый уровень', () => {
  const daemon = new Character('Вася', 'Daemon');
  daemon.health = 0;
  expect(() => daemon.levelUp()).toThrowError('Нельзя повысить уровень покойника');
});

test('Герой должен получать урон в бою', () => {
  const daemon = new Character('Вася', 'Daemon');
  daemon.defence = 40;
  daemon.damage(100);
  expect(daemon.health).toEqual(40);
});

test('Здоровье героя не должно становиться отрицательным', () => {
  const daemon = new Character('Вася', 'Daemon');
  daemon.defence = 40;
  daemon.damage(1000);
  expect(daemon.health).toEqual(0);
});