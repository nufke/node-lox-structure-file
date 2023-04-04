const util = require('util');
const Control = require('../Control.js');

var UpDownLeftRightDigital = function (params, states, subControls) {
    Control.call(this, params, states, subControls);
};

util.inherits(UpDownLeftRightDigital, Control);

module.exports = UpDownLeftRightDigital;
