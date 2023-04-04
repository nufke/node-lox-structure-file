const util = require('util');
const Control = require('../Control.js');

var CentralGate = function (params, states, subControls) {
    Control.call(this, params, states, subControls);
};

util.inherits(CentralGate, Control);

module.exports = CentralGate;
