import util from '../helpers/util';

let sleep = 100;

const sleepAddPoints = () => {
  sleep += 10;
  if (sleep > 100) {
    sleep = 100;
  }
  util.printToDom('sleep-score', sleep);
};

const subtractSleepPoints = () => {
  sleep -= 3;
  if (sleep < 0) {
    sleep = 0;
  }
  util.printToDom('sleep-score', sleep);
};

const sleepButtonEvents = () => {
  document.getElementById('add-sleep-btn').addEventListener('click', sleepAddPoints);
  document.getElementById('subtract-sleep-btn').addEventListener('click', subtractSleepPoints);
};

const sleepDomStringBuilder = () => {
  let domString = '';
    domString += `<h3>Sleep</h3>`;
    domString += `<button id = "add-sleep-btn">Rested</button>`;
    domString += `<button id = "subtract-sleep-btn">Tired</button>`;
    domString += `<div id="sleep-score">sleep Level: ${sleep}</div>`;
    util.printToDom('sleep', domString);
    sleepButtonEvents();

  };
export default { sleepDomStringBuilder }

