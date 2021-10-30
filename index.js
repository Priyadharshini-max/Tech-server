const express = require("express");
const app = express();
const port = process.env.PORT || 5000;

app.use(express.json());

app.get("/", (req, res) => {
    res.json({
        message: "Tech-library-creation"
    })
})

app.listen((port), () => {
    console.log("server connected successfully")
})