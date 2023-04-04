const util = require('util');
const Control = require('../Control.js');

var UpDownAnalog = function (params, states, subControls) {
    Control.call(this, params, states, subControls);
};

util.inherits(UpDownAnalog, Control);

module.exports = UpDownAnalog;
