const util = require('util');
const Control = require('../Control.js');

var AudioZoneCentral = function (params, states, subControls) {
    Control.call(this, params, states, subControls);
};

util.inherits(AudioZoneCentral, Control);

module.exports = AudioZoneCentral;
