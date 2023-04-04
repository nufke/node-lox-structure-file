const util = require('util');
const Control = require('../Control.js');

var ClimateUs = function (params, states, subControls) {
    Control.call(this, params, states, subControls);
};

util.inherits(ClimateUs, Control);

module.exports = ClimateUs;
