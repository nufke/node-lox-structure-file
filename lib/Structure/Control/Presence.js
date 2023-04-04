const util = require('util');
const Control = require('../Control.js');

var Presence = function (params, states, subControls) {
    Control.call(this, params, states, subControls);
};

util.inherits(Presence, Control);

module.exports = Presence;
