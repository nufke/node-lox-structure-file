const util = require('util');
const Control = require('../Control.js');

var EIBDimmer = function (params, states, subControls) {
    Control.call(this, params, states, subControls);
};

util.inherits(EIBDimmer, Control);

module.exports = EIBDimmer;
