const connection = require("./connection");

let orm = {
    all: function(table, cb){
        let query = "SELECT * FROM " + table + ";";
        connection.query(query, function(err, res){
            if(err) throw err;
            console.log(res);
            cb(res);
        });
    },

    create: function(table, cols, vals, cb){
        let query = "INSERT INTO ?? (??, ??) VALUES (?, ?)";
        connection.query(query, [table, cols[0], cols[1], vals[0], vals[1]], function(err, res){
            if (err) throw err;
            console.log(res);
            cb(res)
        });
    },

    update: function(table, cols, vals, cb){
        let query = "UPDATE ?? SET ?? = ? WHERE ?? = ?";
        connection.query(query, [table, cols[0], vals[0], cols[1], vals[1]], function(err, res){
            if(err) throw(err);
            cb(res)
        });
    },

    delete: function(table, condition, cb){
        let query = "DELETE FROM " + table + "WHERE " + condition;
        connection.query(query, function(err, res){
            if (err) throw err;
            cb(res)
        })
    }
};

module.exports = orm;