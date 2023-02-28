/* eslint-disable prettier/prettier */
import img from '../img/goblin.png';

class Goblin {
  constructor(element) {
    this.element = element;
    this.position = null;
    this.interval = null;
  }

  removeGoblin() {
    const goblin = this.element.querySelector('.goblin');
    goblin && goblin.remove();
  }

  addGoblin(num) {
    const newGoblin = document.createElement("img");
    newGoblin.src = img;
    newGoblin.alt = "Goblin";
    newGoblin.classList.add("goblin");
    this.element.querySelectorAll('.game__item')[num]
      .appendChild(newGoblin);
  }

  startGame() {
    const start = document.querySelector('.new-game');
    start.onclick = () => {
      this.addGoblin(this.randomPosition());
      this.interval = setInterval(() => {
        this.removeGoblin();
        this.addGoblin(this.randomPosition())
      }, 500);
      this.stopGame();
      this.win();
    }
  }

  stopGame() {
    const stop = document.querySelector('.stop-game');
    stop.onclick = () => {
      this.removeGoblin();
      clearInterval(this.interval);
    };
  }

  randomPosition() {
    const num = Math.floor(Math.random() * 16);
    if (num === this.position) {
      return this.randomPosition()
    }
    this.position = num;
    return num;
  }

  win() {
    this.element.addEventListener('mouseover', e => {
      if (e.target.classList.value.includes('goblin')) {
        const goblin = document.querySelector('.count');
        goblin.textContent = +goblin.textContent + 1;
      }
    });
  }
}

export default Goblin;
