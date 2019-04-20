import util from '../helpers/util';

let play = 100;

const playAddPoints = () => {
  play += 10;
  if (play > 100) {
    play = 100;
  }
  util.printToDom('play-score', play);
};

const subtractPlayPoints = () => {
  play -= 3;
  if (play < 0) {
    play = 0;
  }
  util.printToDom('play-score', play);
};

const playButtonEvents = () => {
  document.getElementById('add-play-btn').addEventListener('click', playAddPoints);
  document.getElementById('subtract-play-btn').addEventListener('click', subtractPlayPoints);
};

const funDomStringBuilder = () => {
  let domString = '';
    domString += `<h3>Fun</h3>`;
    domString += `<button id = "add-play-btn">Playing</button>`;
    domString += `<button id = "subtract-play-btn">Bored</button>`;
    domString += `<div id="play-score">Play Level: ${play}</div>`;
    util.printToDom('play', domString);
    playButtonEvents();

  };
export default { funDomStringBuilder }

