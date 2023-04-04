const util = require('util');
const Control = require('../Control.js');

var Wallbox2 = function (params, states, subControls) {
    Control.call(this, params, states, subControls);
};

util.inherits(Wallbox2, Control);

module.exports = Wallbox2;
