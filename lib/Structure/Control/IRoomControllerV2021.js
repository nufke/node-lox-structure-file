const util = require('util');
const Control = require('../Control.js');

var IRoomControllerV2021 = function (params, states, subControls) {
    Control.call(this, params, states, subControls);
};

util.inherits(IRoomControllerV2021, Control);

module.exports = IRoomControllerV2021;
