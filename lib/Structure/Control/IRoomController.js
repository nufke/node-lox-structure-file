const util = require('util');
const Control = require('../Control.js');

var IRoomController = function (params, states, subControls) {
    Control.call(this, params, states, subControls);
};

util.inherits(PoolCIRoomControllerontroller, Control);

module.exports = IRoomController;
