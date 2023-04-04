const util = require('util');
const Control = require('../Control.js');

var EnergyManager2 = function (params, states, subControls) {
    Control.call(this, params, states, subControls);
};

util.inherits(EnergyManager2, Control);

module.exports = EnergyManager2;
