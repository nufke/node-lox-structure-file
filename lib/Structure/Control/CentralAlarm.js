const util = require('util');
const Control = require('../Control.js');

var CentralAlarm = function (params, states, subControls) {
    Control.call(this, params, states, subControls);
};

util.inherits(CentralAlarm, Control);

module.exports = CentralAlarm;
