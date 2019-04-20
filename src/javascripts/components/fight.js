import util from '../helpers/util';

let strength = 100;

const strengthAddPoints = () => {
  strength += 1;
  if (strength > 100) {
    strength = 100;
  }
  util.printToDom('fight-score', strength);
};

const subtractStrengthPoints = () => {
  strength -= 10;
  if (strength < 0) {
    strength = 0;
  }
  util.printToDom('fight-score', strength);
};

const fightButtonEvents = () => {
  document.getElementById('add-strength-btn').addEventListener('click', strengthAddPoints);
  document.getElementById('subtract-strength-btn').addEventListener('click', subtractStrengthPoints);
};

const fightDomStringBuilder = () => {
  let domString = '';
  domString += `<h3>Fight</h3>`;
  domString += `<button id='add-strength-btn'>Strength</button>`;
  domString += `<button id='subtract-strength-btn'>Violence</button>`;
  domString += `<div id='fight-score'>Strength Level: ${strength}</div>`;
  util.printToDom('fight', domString);
  fightButtonEvents();
};
export default { fightDomStringBuilder };
