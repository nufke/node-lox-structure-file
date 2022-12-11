const util = require('util');
const Control = require('../Control.js');

var Window = function (params, states, subControls) {
    Control.call(this, params, states, subControls);
};

util.inherits(Window, Control);

module.exports = Window;
