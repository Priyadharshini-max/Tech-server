const express = require("express");
const app = express();
require("dotenv").config();

const cors = require("cors");

const mongo = require("./Shared/mongo");
const jwt = require("jsonwebtoken");

//Import all routes
const allRoute = require("./Routes/allDate.route");
const authRoute = require("./Routes/auth.route");
const profileRoute = require("./Routes/profile.route");


app.listen(process.env.PORT, () => {
    console.log(`Connected to ${process.env.PORT} Server...`);
});

async function loadApp() {
    try {
        await mongo.connect();
        app.use(cors());
        app.use(express.json());
        app.get("/", (req, res) => {
            res.send({ "Message": "Success" })
        })
        app.use("/auth", authRoute);
        app.use((req, res, next) => {
            const token = req.headers["access-token"];

            if (token) {
                try {
                    const { userId } = jwt.verify(token, process.env.JWT_PRIVATE_KEY);
                    console.log(userId)
                    req.user = userId;
                    next();
                }
                catch (error) {
                    res.status(401).send({ error: "Invalid token" });
                }
            } else {
                res.status(401).send({ error: "Token is missing" });
            }

        });

        app.use("/alldata", allRoute);
        app.use("/profile", profileRoute);

    }
    catch (err) {
        console.error(err);
        process.exit();
    }
}

loadApp();