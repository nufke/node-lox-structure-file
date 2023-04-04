const util = require('util');
const Control = require('../Control.js');

var PresenceController = function (params, states, subControls) {
    Control.call(this, params, states, subControls);
};

util.inherits(PresenceController, Control);

module.exports = PresenceController;
