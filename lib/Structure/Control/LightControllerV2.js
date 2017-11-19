const util = require('util');
const Control = require('../Control.js');

var LightControllerV2 = function (params, states, subControls) {
    Control.call(this, params, states, subControls);
};

util.inherits(LightControllerV2, Control);

LightControllerV2.prototype.get_state = function () {
    var jLocked = this.states.items['jLocked'].value;
    var activeMoods = this.states.items['activeMoods'].value;
    var moodList = this.states.items['moodList'].value;
    var activeMoodsNum = this.states.items['activeMoodsNum'].value;
    var favoriteMoods = this.states.items['favoriteMoods'].value;
    var additionalMoods = this.states.items['additionalMoods'].value;
    var circuitNames = this.states.items['circuitNames'].value;
    var daylightConfig = this.states.items['daylightConfig'].value;

    return {
        'activeSjLockedcene': jLocked,
        'activeMoods': activeMoods,
        'moodList': moodList,
        'activeMoodsNum': activeMoodsNum,
        'favoriteMoods': favoriteMoods,
        'additionalMoods': additionalMoods,
        'circuitNames': circuitNames,
        'daylightConfig': daylightConfig
    };
};

module.exports = LightControllerV2;
