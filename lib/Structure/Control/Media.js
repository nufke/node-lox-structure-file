const util = require('util');
const Control = require('../Control.js');

var Media = function (params, states, subControls) {
    Control.call(this, params, states, subControls);
};

util.inherits(Media, Control);

module.exports = Media;
