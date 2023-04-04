const util = require('util');
const Control = require('../Control.js');

var CentralWindow = function (params, states, subControls) {
    Control.call(this, params, states, subControls);
};

util.inherits(CentralWindow, Control);

module.exports = CentralWindow;
