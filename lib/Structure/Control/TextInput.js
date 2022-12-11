const util = require('util');
const Control = require('../Control.js');

var TextInput = function (params, states, subControls) {
    Control.call(this, params, states, subControls);
};

util.inherits(TextInput, Control);

module.exports = TextInput;
