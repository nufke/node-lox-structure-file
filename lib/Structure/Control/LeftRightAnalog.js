const util = require('util');
const Control = require('../Control.js');

var LeftRightAnalog = function (params, states, subControls) {
    Control.call(this, params, states, subControls);
};

util.inherits(LeftRightAnalog, Control);

module.exports = LeftRightAnalog;
