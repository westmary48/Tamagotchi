import util from '../helpers/util';

// let strength = 100;

const fightDomStringBuilder = () => {
  let domString = '';
    domString += `<h3>Fight</h3>`;
    domString += `<button>Strength</button>`;
    domString += `<button>Violence</button>`;
    util.printToDom('fight', domString);
  };
export default { fightDomStringBuilder }
