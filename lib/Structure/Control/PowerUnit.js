const util = require('util');
const Control = require('../Control.js');

var PowerUnit = function (params, states, subControls) {
    Control.call(this, params, states, subControls);
};

util.inherits(PowerUnit, Control);

module.exports = PowerUnit;
