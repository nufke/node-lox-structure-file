const util = require('util');
const Control = require('../Control.js');

var Application = function (params, states, subControls) {
    Control.call(this, params, states, subControls);
};

util.inherits(Application, Control);

module.exports = Application;
