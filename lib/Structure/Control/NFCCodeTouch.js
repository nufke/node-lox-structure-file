const util = require('util');
const Control = require('../Control.js');

var NFCCodeTouch = function (params, states, subControls) {
    Control.call(this, params, states, subControls);
};

util.inherits(NFCCodeTouch, Control);

module.exports = NFCCodeTouch;
