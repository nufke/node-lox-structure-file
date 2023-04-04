const util = require('util');
const Control = require('../Control.js');

var IRoom = function (params, states, subControls) {
    Control.call(this, params, states, subControls);
};

util.inherits(IRoom, Control);

module.exports = IRoom;
