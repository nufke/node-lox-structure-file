const util = require('util');
const Room = require('./Room.js');

var Category = function (params) {
    Room.apply(this, [params]);
};

util.inherits(Category, Room);

module.exports = Category;
