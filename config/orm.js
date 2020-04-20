const connection = require("./connection");

const orm = {
    selectAll: function(tableName, cb){
        let query = "SELECT *FROM " + tableName + ";";
        connection.query(query, function(err, res){
            if(err) throw err;
            console.log(res);
            cb(res);
        });
    },

    insertOne: function(tableName, userInput, cb){
        let query = "INSERT INTO " + tableName + " SET ?";
        connection.query(query, [userInput], function(err, res){
            if (err) throw err;
            console.log(query.sql);
            console.log(res);
            cb(res)
        });
    },

    updateOne: function(tableName, userInput, condition, cb){
        let query = "UPDATE " + tableName + " SET ? WHERE ?";
        connection.query(query, [userInput, condition], function(err, res){
            if(err) throw(err);
            console.log(query.sql);
            cb(res)
        });
    }
};

module.exports = orm;