import util from '../helpers/util';

// let fun = 100;

const funDomStringBuilder = () => {
  let domString = '';
    domString += `<h3>Play</h3>`;
    domString += `<button>Fun</button>`;
    domString += `<button>Not Fun</button>`;
    util.printToDom('play', domString);
  };

  export default { funDomStringBuilder }
