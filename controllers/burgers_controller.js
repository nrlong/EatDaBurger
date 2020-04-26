const express = require("express");
const router = express.Router();
const burger = require("../models/burger");

// router.get("/", function(req, res){
//     res.redirect("/burgers")
// });

router.get("/", function(req, res){
    burger.all(function(data){
        let burgerData = {
            burger: data
        };
        res.render("index", burgerData)
    });
});

router.post("/api/burgers/", function(req, res){
    burger.create(["burger_name", "devoured"], [req.body.burger_name, false], function(data){
        res.redirect("/")
    });
});

router.put("api/burgers/:id", function(req, res){
    let id = req.params.id;

    burger.update(["devoured", "id"], [true, id], function(data){
        if (data.changedRows == 0){
            return res.status(404).end();
        }else{
            res.status(200).end();
        }
    });
});

router.delete("api/burgers/:id", function(req, res){
    let condition = "id = " + req.params.id;

    burger.delete(condition, function(data){
        if(data.affectedRows == 0){
            return res.status(404).end();
        }else{
            res.status(200).end();
        }
    });
});

module.exports = router;