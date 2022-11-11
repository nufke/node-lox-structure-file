const util = require('util');
const Control = require('../Control.js');

var CentralLightController = function (params, states, subControls) {
    Control.call(this, params, states, subControls);
};

util.inherits(CentralLightController, Control);

module.exports = CentralLightController;
