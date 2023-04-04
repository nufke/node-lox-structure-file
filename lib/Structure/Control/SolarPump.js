const util = require('util');
const Control = require('../Control.js');

var SolarPump = function (params, states, subControls) {
    Control.call(this, params, states, subControls);
};

util.inherits(SolarPump, Control);

module.exports = SolarPump;
