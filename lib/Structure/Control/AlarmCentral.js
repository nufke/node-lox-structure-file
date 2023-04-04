const util = require('util');
const Control = require('../Control.js');

var AlarmCentral = function (params, states, subControls) {
    Control.call(this, params, states, subControls);
};

util.inherits(AlarmCentral, Control);

module.exports = AlarmCentral;
