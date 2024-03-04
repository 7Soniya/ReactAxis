const express = require("express");
const messageRecive = require("../models/Messages");
const router = express.Router();

// router.get("/message", async function (req, res) {
//     const messagess = await messageRecive.find()
//     res.json(messagess);
// })

router.get("/axismessage", async (req, res) => {
    let cardData = await messageRecive.find().sort({ createdAt: -1 });
    res.render("message", { cardData })
})

router.post("/message", async function (req, res) {
    const messagedata = req.body;
    await messageRecive.create(messagedata);
    res.json("upadate")
})


module.exports = router;