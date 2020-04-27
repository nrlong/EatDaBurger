const orm = require("../config/orm");

let burger = {
    selectAll: function(cb){
        orm.selectAll("burgers", function(res){
            // console.log(res)
            cb(res)
        });
    },

    insertOne: function(cols, vals, cb){
        orm.insertOne("burgers", cols, vals, function(res){
            cb(res);
        });
    },

    updateOne: function(id, cb){
        orm.updateOne("burgers", "devoured", true, id, function(res){
            cb(res)
        });
    },
    // delete: function(condition, cb){
    //     orm.delete("burgers", condition, function(res){
    //         cb(res);
    //     });
    // }
};


module.exports = burger;