const util = require('util');
const Control = require('../Control.js');

var CentralAudioZone = function (params, states, subControls) {
    Control.call(this, params, states, subControls);
};

util.inherits(CentralAudioZone, Control);

module.exports = CentralAudioZone;
