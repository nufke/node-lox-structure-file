const util = require('util');
const Control = require('../Control.js');

var Climate = function (params, states, subControls) {
    Control.call(this, params, states, subControls);
};

util.inherits(Climate, Control);

module.exports = Climate;
