const connection = require("./connection");

let orm = {
    selectAll: function(table, cb){
        let query = "SELECT * FROM " + table + ";";
        connection.query(query, function(err, result){
            if(err) throw err;
            // console.log(result);
            cb(result);
        });
    },

    insertOne: function(table, cols, vals, cb){
        let query = `INSERT INTO ${table} (${cols}, devoured) VALUES ("${vals}", 0);`;
        connection.query(query,  function(err, result){
            if (err) throw err;
            // console.log(result);
            cb(result)
        });
    },

    updateOne: function(table, cols, condition, val, cb){
        let query = `UPDATE ${table} SET ${cols}=${condition} WHERE id=${val};`;
        connection.query(query, function(err, result){
            if(err) throw(err);
            cb(result)
        });
    },

    // delete: function(table, condition, cb){
    //     let query = "DELETE FROM " + table + "WHERE " + condition;
    //     connection.query(query, function(err, result){
    //         if (err) throw err;
    //         cb(result)
    //     })
    // }
};

module.exports = orm;