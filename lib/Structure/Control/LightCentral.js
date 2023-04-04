const util = require('util');
const Control = require('../Control.js');

var LightCentral = function (params, states, subControls) {
    Control.call(this, params, states, subControls);
};

util.inherits(LightCentral, Control);

module.exports = LightCentral;
