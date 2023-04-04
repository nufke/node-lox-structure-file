const util = require('util');
const Control = require('../Control.js');

var Athene = function (params, states, subControls) {
    Control.call(this, params, states, subControls);
};

util.inherits(Athene, Control);

module.exports = Athene;
