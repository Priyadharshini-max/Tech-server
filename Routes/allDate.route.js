const express = require("express");
const router = express.Router();
const allService = require("../Services/allData.service");

router.get("/", async (req, res) => {
    const alldata = await allService.getHtmlData();
    res.send(alldata);
})

router.post("/", async (req, res) => {
    const alldata = await allService.postHtmlData(req.body);
    res.send(alldata);
})

module.exports = router;