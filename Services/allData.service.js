const mongo = require("../Shared/mongo");

const service = {
    getHtmlData() {
        return mongo.db.collection("htmldata").find().toArray();
    },
    postHtmlData(data) {
        return mongo.db.collection("htmldata").insertOne(data);
    }
}

module.exports = service;