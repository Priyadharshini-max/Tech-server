const express = require("express");
const app = express();

require("dotenv").config();
const cors = require("cors");

const mongo = require("./Shared/mongo");

const port = process.env.PORT || 5000;
app.listen((port), () => {
    console.log("server connected successfully")
});
async function loadApp() {
    try {
        await mongo.connect();
        app.use(cors());
        app.use(express.json());
        app.get("/", (req, res) => {
            res.send({ "message": "Successfully connected" });
        })
    }
    catch (err) {
        console.error(err);
        process.exit();
    }
}
loadApp();
