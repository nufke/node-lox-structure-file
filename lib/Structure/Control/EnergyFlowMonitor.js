const util = require('util');
const Control = require('../Control.js');

var EnergyFlowMonitor = function (params, states, subControls) {
    Control.call(this, params, states, subControls);
};

util.inherits(EnergyFlowMonitor, Control);

module.exports = EnergyFlowMonitor;
