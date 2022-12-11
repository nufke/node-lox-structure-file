const util = require('util');
const Control = require('../Control.js');

var SolarPumpController = function (params, states, subControls) {
    Control.call(this, params, states, subControls);
};

util.inherits(SolarPumpController, Control);

module.exports = SolarPumpController;
