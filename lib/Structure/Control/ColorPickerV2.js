const util = require('util');
const Control = require('../Control.js');

var ColorPickerV2 = function (params, states, subControls) {
    Control.call(this, params, states, subControls);
};

util.inherits(ColorPickerV2, Control);

module.exports = ColorPickerV2;
