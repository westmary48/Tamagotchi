import util from '../helpers/util';

let energy = 50;

const napPoints = () => {
  energy += 50;
  if (energy > 100) {
    energy = 100;
  }
  util.printToDom('energy-score', energy);
};

const deepSlumberPoints = () => {
  energy += 60;
  if (energy > 100) {
    energy = 100;
  }
  util.printToDom('energy-score', energy);
};

const energyButtonEvents = () => {
  document.getElementById('add-energy-btn').addEventListener('click', napPoints);
  document.getElementById('subtract-energy-btn').addEventListener('click', deepSlumberPoints);
};

const energyDomStringBuilder = () => {
  let domString = '';
  domString += `<h3>Energy</h3>`;
  domString += `<button id='add-energy-btn'>Nap</button>`;
  domString += `<button id='subtract-energy-btn'>Deep Slumber</button>`;
  domString += `<div id='energy-score'>Energy Level: ${energy}</div>`;
  util.printToDom('sleep', domString);
  energyButtonEvents();
};
export default { energyDomStringBuilder };
