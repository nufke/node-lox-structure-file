const util = require('util');
const Control = require('../Control.js');

var Ventilation = function (params, states, subControls) {
    Control.call(this, params, states, subControls);
};

util.inherits(Ventilation, Control);

module.exports = Ventilation;
