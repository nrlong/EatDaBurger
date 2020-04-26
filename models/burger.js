const orm = require("../config/orm");

let burger = {
    all: function(cb){
        orm.all("burgers", function(res){
            cb(res)
        });
    },

    create: function(cols, vals, cb){
        orm.create("burgers", cols, vals, function(res){
            cb(res);
        });
    },

    update: function(cols, vals, cb){
        orm.update("burgers", cols, vals, function(res){
            cb(res)
        });
    },
    delete: function(condition, cb){
        orm.delete("burgers", condition, function(res){
            cb(res);
        });
    }
};


module.exports = burger;