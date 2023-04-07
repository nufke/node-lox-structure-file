const util = require('util');
const Control = require('../Control.js');

var NfcCodeTouch = function (params, states, subControls) {
    Control.call(this, params, states, subControls);
};

util.inherits(NfcCodeTouch, Control);

module.exports = NfcCodeTouch;
