const util = require('util');
const Control = require('../Control.js');

var Sequential = function (params, states, subControls) {
    Control.call(this, params, states, subControls);
};

util.inherits(Sequential, Control);

module.exports = Sequential;
