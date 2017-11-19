const util = require('util');
const Control = require('../Control.js');

var IRCDaytimer = function (params, states, subControls) {
    Control.call(this, params, states, subControls);
};

util.inherits(IRCDaytimer, Control);

module.exports = IRCDaytimer;
