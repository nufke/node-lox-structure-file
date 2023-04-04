const util = require('util');
const Control = require('../Control.js');

var IRCV2Daytimer = function (params, states, subControls) {
    Control.call(this, params, states, subControls);
};

util.inherits(IRCV2Daytimer, Control);

module.exports = IRCV2Daytimer;
