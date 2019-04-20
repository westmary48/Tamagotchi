import util from '../helpers/util';

let fun = 50;

const superFunPoints = () => {
  fun += 50;
  if (fun > 100) {
    fun = 100;
  }
  util.printToDom('fun-score', fun);
};

const funPoints = () => {
  fun += 2;
  if (fun > 100) {
    fun = 100;
  }
  util.printToDom('fun-score', fun);
};

const funButtonEvents = () => {
  document.getElementById('add-super-fun-btn').addEventListener('click', superFunPoints);
  document.getElementById('add-fun-btn').addEventListener('click', funPoints);
};

const funDomStringBuilder = () => {
  let domString = '';
    domString += `<h3>Fun</h3>`;
    domString += `<button id = "add-super-fun-btn">Super Fun!</button>`;
    domString += `<button id = "add-fun-btn">Fun</button>`;
    domString += `<div id="fun-score">Fun Level: ${fun}</div>`;
    util.printToDom('play', domString);
    funButtonEvents();

  };
export default { funDomStringBuilder }
