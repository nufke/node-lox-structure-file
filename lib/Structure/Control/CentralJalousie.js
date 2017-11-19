const util = require('util');
const Control = require('../Control.js');

var CentralJalousie = function (params, states, subControls) {
    Control.call(this, params, states, subControls);
};

util.inherits(CentralJalousie, Control);

module.exports = CentralJalousie;
