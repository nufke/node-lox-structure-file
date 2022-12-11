const util = require('util');
const Control = require('../Control.js');

var Irrigation = function (params, states, subControls) {
    Control.call(this, params, states, subControls);
};

util.inherits(Irrigation, Control);

module.exports = Irrigation;
