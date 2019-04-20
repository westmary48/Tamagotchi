import util from '../helpers/util';

let full = 100;

const fullAddPoints = () => {
  full += 10;
  if (full > 100) {
    full = 100;
  }
  util.printToDom('full-score', full);
};

const subtractFullPoints = () => {
  full -= 3;
  if (full < 0) {
    full = 0;
  }
  util.printToDom('full-score', full);
};

const eatButtonEvents = () => {
  document.getElementById('add-full-btn').addEventListener('click', fullAddPoints);
  document.getElementById('subtract-full-btn').addEventListener('click', subtractFullPoints);
};

const eatDomStringBuilder = () => {
  let domString = '';
    domString += `<h3>Eat</h3>`;
    domString += `<button id = "add-full-btn">Full</button>`;
    domString += `<button id = "subtract-full-btn">Starving</button>`;
    domString += `<div id="full-score">Full Level: ${full}</div>`;
    util.printToDom('eat', domString);
    eatButtonEvents();

  };
export default { eatDomStringBuilder }
