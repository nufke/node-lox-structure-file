const util = require('util');
const Control = require('../Control.js');

var MeterV2 = function (params, states, subControls) {
    Control.call(this, params, states, subControls);
};

util.inherits(MeterV2, Control);

module.exports = MeterV2;
