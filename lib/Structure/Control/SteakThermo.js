const util = require('util');
const Control = require('../Control.js');

var SteakThermo = function (params, states, subControls) {
    Control.call(this, params, states, subControls);
};

util.inherits(SteakThermo, Control);

module.exports = SteakThermo;
