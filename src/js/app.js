import Bowman from './Bowman';
import Swordsman from './Swordsman';
import Magician from './Magician';
import Daemon from './Daemon';
import Undead from './Undead';
import Zombie from './Zombie';

function exampleCreateHeroes() {
  const bowman = new Bowman('Вика');
  const swordsman = new Swordsman('Вова');
  const magician = new Magician('Петро');
  const daemon = new Daemon('Гранд');
  const undead = new Undead('Степашка');
  const zombie = new Zombie('Толик');
  return {
    bowman, swordsman, magician, daemon, undead, zombie,
  };
}

const hero = exampleCreateHeroes().daemon;

hero.damage(165);
hero.levelUp();