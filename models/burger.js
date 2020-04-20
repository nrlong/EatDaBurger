const orm = require("../config/orm");

var burger = {
    all: function(cb){
        orm.selectAll("burgers", cb);
    },

    create: function(userInput, cb){
        orm.insertOne("burgers", userInput, cb);
    },

    update: function(userInput, condition, cb){
        orm.updateOne("burgers", userInput, condition, cb);
    }
};


module.exports = burger;