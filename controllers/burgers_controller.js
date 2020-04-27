const express = require("express");
const router = express.Router();

let burger = require("../models/burger");



router.get("/", function(req, res){
    burger.selectAll(function(data){
        var burgerData = {
            burgers: data
        };
        // console.log(burgerData)
        res.render("index.handlebars", burgerData)
    });
});

router.post("/api/burgers", function(req, res){
    let burgerName = req.body.burger_name;
    burger.insertOne("burger_name", burgerName, function(res){
        res.json({ id: result.insertId });
    })
    // burger.create(["burger_name", "devoured"], [req.body.burger_name, req.body.devoured], function(data){
    //     res.json({id: res.insertId})
});

router.put("api/burgers/:id", function(req, res){
    let condition = "id = " + req.params.id;

    burger.updateOne(req.params.id, function(data){
        if (data.changedRows == 0){
            return res.status(404).end();
        }else{
            res.status(200).end();
        }
    });
});

// router.delete("api/burgers/:id", function(req, res){
//     let condition = "id = " + req.params.id;

//     burger.delete(condition, function(data){
//         if(data.affectedRows == 0){
//             return res.status(404).end();
//         }else{
//             res.status(200).end();
//         }
//     });
// });

module.exports = router;