const util = require('util');
const Control = require('../Control.js');

var IntercomV2 = function (params, states, subControls) {
    Control.call(this, params, states, subControls);
};

util.inherits(IntercomV2, Control);

module.exports = IntercomV2;
