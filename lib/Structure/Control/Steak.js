const util = require('util');
const Control = require('../Control.js');

var Steak = function (params, states, subControls) {
    Control.call(this, params, states, subControls);
};

util.inherits(Steak, Control);

module.exports = Steak;
