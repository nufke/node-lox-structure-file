const util = require('util');
const Control = require('../Control.js');

var Weather = function (params, states, subControls) {
    Control.call(this, params, states, subControls);
};

util.inherits(Weather, Control);

module.exports = Weather;
