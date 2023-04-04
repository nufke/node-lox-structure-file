const util = require('util');
const Control = require('../Control.js');

var MediaClient = function (params, states, subControls) {
    Control.call(this, params, states, subControls);
};

util.inherits(MediaClient, Control);

module.exports = MediaClient;
