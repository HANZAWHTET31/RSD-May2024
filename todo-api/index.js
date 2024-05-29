const express = require("express");
const app = express();

const {MongoClient, ObjectId} = require("mongodb");
const client =  new MongoClient("mongodb://localhost");
const db = client.db("todoList");

const bodyParser = require("body-parser");
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

const cors = require("cors");
app.use(cors());

app.get("/todoList", async (req, res) => {
      const data = await db.collection("tasks").find().toArray();
      setTimeout(() => {
            res.json(data);
      }, 2000);
});

app.listen(8181, () => {
      console.log("API running ar port 8181");
});