const util = require('util');
const Control = require('../Control.js');

var GateCentral = function (params, states, subControls) {
    Control.call(this, params, states, subControls);
};

util.inherits(GateCentral, Control);

module.exports = GateCentral;
