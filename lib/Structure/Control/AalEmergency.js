const util = require('util');
const Control = require('../Control.js');

var AalEmergency = function (params, states, subControls) {
    Control.call(this, params, states, subControls);
};

util.inherits(AalEmergency, Control);

module.exports = AalEmergency;
