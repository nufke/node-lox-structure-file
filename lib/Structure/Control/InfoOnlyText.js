const util = require('util');
const Control = require('../Control.js');

var InfoOnlyText = function (params, states, subControls) {
    Control.call(this, params, states, subControls);
};

util.inherits(InfoOnlyText, Control);

InfoOnlyText.prototype.get_state = function () {
    var text = this.states.items['text'].value;

    return {
        'text': text
    };

};

module.exports = InfoOnlyText;
