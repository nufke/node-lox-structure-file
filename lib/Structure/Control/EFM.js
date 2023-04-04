const util = require('util');
const Control = require('../Control.js');

var EFM = function (params, states, subControls) {
    Control.call(this, params, states, subControls);
};

util.inherits(EFM, Control);

module.exports = EFM;
