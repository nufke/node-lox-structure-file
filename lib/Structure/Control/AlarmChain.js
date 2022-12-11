const util = require('util');
const Control = require('../Control.js');

var AlarmChain = function (params, states, subControls) {
    Control.call(this, params, states, subControls);
};

util.inherits(AlarmChain, Control);

module.exports = AlarmChain;
