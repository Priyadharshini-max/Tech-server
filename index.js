const express = require("express");
const app = express();
const port = process.env.PORT || 5000;

app.use(express.json());

app.get("/", (req, res) => {
    res.json({
    student : [{
        name : "priya",
        depart : "ece"
    }]
    })
})

app.listen((port), () => {
    console.log("server connected successfully")
})