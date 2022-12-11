const util = require('util');
const Control = require('../Control.js');

var AudioZoneV2 = function (params, states, subControls) {
    Control.call(this, params, states, subControls);
};

util.inherits(AudioZoneV2, Control);

module.exports = AudioZoneV2;
