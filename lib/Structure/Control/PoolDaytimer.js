const util = require('util');
const Control = require('../Control.js');

var PoolDaytimer = function (params, states, subControls) {
    Control.call(this, params, states, subControls);
};

util.inherits(PoolDaytimer, Control);

module.exports = PoolDaytimer;
