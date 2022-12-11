const util = require('util');
const Control = require('../Control.js');

var LoadManager = function (params, states, subControls) {
    Control.call(this, params, states, subControls);
};

util.inherits(LoadManager, Control);

module.exports = LoadManager;
