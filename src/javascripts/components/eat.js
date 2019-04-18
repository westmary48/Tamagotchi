import util from '../helpers/util';

// let full = 100;

const eatDomStringBuilder = () => {
let domString = '';
  domString += `<h3>Eat</h3>`;
  domString += `<button>Healthy</button>`;
  domString += `<button>Unhealthy</button>`;
  util.printToDom('eat', domString)

};
export default { eatDomStringBuilder }
