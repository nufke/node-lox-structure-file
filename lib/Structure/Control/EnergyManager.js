const util = require('util');
const Control = require('../Control.js');

var EnergyManager = function (params, states, subControls) {
    Control.call(this, params, states, subControls);
};

util.inherits(EnergyManager, Control);

module.exports = EnergyManager;
