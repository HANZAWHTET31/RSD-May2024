const  { MongoClient, ObjectId } = require ("mongodb");
const client = new MongoClient("mongodb://localhost");

const task = client.db("todo").collection("task");

async function getTasks(){
      const tasks = await task.find().toArray();
      console.log(tasks);
};

getTasks();
