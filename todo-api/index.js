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

app.get("/todoList/:id", async (req, res) => {
      const id = req.params;
      const data = await db.collection("tasks").findOne({_id: new ObjectId(id)});
      return res.json(data);
});

app.post("/todoList", async (req, res) => {
      const {name} = req.body;
      const result = await db.collection("tasks").insertOne({name: name, done: false});
      return res.json({_id: result.insertedId, name: name, done: false});
});

app.put("/todoList/:id", async (req, res) => {
      const id = req.params;
      const {name} = req.body;

      const result = await db.collection("tasks").updateOne({_id: new ObjectId(id)}, {$set: {name}});
      return res.json(result);
})

app.listen(8181, () => {
      console.log("API running ar port 8181");
});