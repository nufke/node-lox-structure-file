const util = require('util');
const Control = require('../Control.js');

var Pool = function (params, states, subControls) {
    Control.call(this, params, states, subControls);
};

util.inherits(Pool, Control);

module.exports = Pool;
