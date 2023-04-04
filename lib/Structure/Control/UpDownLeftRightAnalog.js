const util = require('util');
const Control = require('../Control.js');

var UpDownLeftRightAnalog = function (params, states, subControls) {
    Control.call(this, params, states, subControls);
};

util.inherits(UpDownLeftRightAnalog, Control);

module.exports = UpDownLeftRightAnalog;
