import util from '../helpers/util';

// let full = 100;

const sleepDomStringBuilder = () => {
let domString = '';
  domString += `<h3>Sleep</h3>`;
  domString += `<button>Sleep</button>`;
  domString += `<button>Awake</button>`;
  util.printToDom('sleep', domString);
}

export default { sleepDomStringBuilder }