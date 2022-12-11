const util = require('util');
const Control = require('../Control.js');

var IRoomControllerV2 = function (params, states, subControls) {
    Control.call(this, params, states, subControls);
};

util.inherits(IRoomControllerV2, Control);

module.exports = IRoomControllerV2;
