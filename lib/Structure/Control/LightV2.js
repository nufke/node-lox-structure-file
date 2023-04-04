const util = require('util');
const Control = require('../Control.js');

var LightV2 = function (params, states, subControls) {
    Control.call(this, params, states, subControls);
};

util.inherits(LightV2, Control);

module.exports = LightV2;
