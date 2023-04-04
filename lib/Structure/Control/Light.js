const util = require('util');
const Control = require('../Control.js');

var Light = function (params, states, subControls) {
    Control.call(this, params, states, subControls);
};

util.inherits(Light, Control);

module.exports = Light;
