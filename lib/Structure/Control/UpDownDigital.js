const util = require('util');
const Control = require('../Control.js');

var UpDownDigital = function (params, states, subControls) {
    Control.call(this, params, states, subControls);
};

util.inherits(UpDownDigital, Control);

module.exports = UpDownDigital;
