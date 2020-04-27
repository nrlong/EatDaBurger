// const connection = require("./connection");

// const orm = {
//     selectAll: function(table, cb){
//         let query = "SELECT * FROM " + table + ";";
//         connection.query(query, function(err, result){
//             if(err) throw err;
//             // console.log(result);
//             cb(result);
//         });
//     },

//     insertOne: function(table, cols, vals, cb){
//         let query = `INSERT INTO ${table} (${cols}, devoured) VALUES ("${vals}", 0);`;
//         connection.query(query,  function(err, result){
//             if (err) throw err;
//             // console.log(result);
//             cb(result)
//         });
//     },

//     updateOne: function(table, cols, condition, val, cb){
//         let query = `UPDATE ${table} SET ${cols}=${condition} WHERE id=${val};`;
//         connection.query(query, function(err, result){
//             if(err) throw(err);
//             cb(result)
//         });
//     },

//     // delete: function(table, condition, cb){
//     //     let query = "DELETE FROM " + table + "WHERE " + condition;
//     //     connection.query(query, function(err, result){
//     //         if (err) throw err;
//     //         cb(result)
//     //     })
//     // }
// };

// module.exports = orm;


const connection = require("./connection.js");

function printQuestionMarks(num) {
  let arr = [];

  for (let i = 0; i < num; i++) {
    arr.push("?");
  }

  return arr.toString();
};

function objToSql(ob) {
  let arr = [];

  for (let key in ob) {
    let value = ob[key];
    if (Object.hasOwnProperty.call(ob, key)) {
      if (typeof value === "string" && value.indexOf(" ") >= 0) {
        value = "'" + value + "'";
      }
      arr.push(key + "=" + value);
    }
  }
  return arr.toString();
};

const orm = {
  selectAll: function(tableInput, cb) {
    let queryString = "SELECT * FROM " + tableInput + ";";
    connection.query(queryString, function(err, result) {
      if (err) {
        throw err;
      }
      cb(result);
    });
  },

  insertOne: function(table, cols, vals, cb) {
    console.log(cols);
    let queryString = "INSERT INTO " + table;

    queryString += " (";
    queryString += cols.toString();
    queryString += ") ";
    queryString += "VALUES (";
    queryString += printQuestionMarks(vals.length);
    queryString += ") ";

    connection.query(queryString, vals, function(err, result) {
      if (err) {
        throw err;
      }

      cb(result);
    });
  },

  updateOne: function(table, objColVals, condition, cb) {
    let queryString = "UPDATE " + table;

    queryString += " SET ";
    queryString += objToSql(objColVals);
    queryString += " WHERE ";
    queryString += condition;

    connection.query(queryString, function(err, result) {
      if (err) {
        throw err;
      }

      cb(result);
    });
  }
};

module.exports = orm;