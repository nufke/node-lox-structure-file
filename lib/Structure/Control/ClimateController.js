const util = require('util');
const Control = require('../Control.js');

var ClimateController = function (params, states, subControls) {
    Control.call(this, params, states, subControls);
};

util.inherits(ClimateController, Control);

module.exports = ClimateController;
