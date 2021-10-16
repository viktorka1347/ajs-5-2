import Bowman from './Bowman';
import Swordsman from './Swordsman';
import Magician from './Magician';
import Daemon from './Daemon';
import Undead from './Undead';
import Zombie from './Zombie';

function exampleCreateHeroes() {
  const bowman = new Bowman('Изя');
  const swordsman = new Swordsman('Боря');
  const magician = new Magician('Петро');
  const daemon = new Daemon('Адольф');
  const undead = new Undead('Хрюша');
  const zombie = new Zombie('Жора');
  return {
    bowman, swordsman, magician, daemon, undead, zombie,
  };
}

const hero = exampleCreateHeroes().daemon;

hero.damage(165);
hero.levelUp();