import express from 'express'
import { MongoClient } from 'mongodb'

const dbName = "college"
const url = "mongodb://localhost:27017"
const client = new MongoClient(url)


const app = express();


app.set('view engine', 'ejs')


app.use(express.urlencoded({ extended: true }))
client.connect().then((connection) => {
    const db = connection.db(dbName);


    app.get("/api", async (req, resp) => {
        const collection = db.collection('students')
        const students = await collection.find().toArray();
        resp.send(students)
    })

    app.get("/ui", async (req, resp) => {
        const collection = db.collection('students')
        const students = await collection.find().toArray();
        resp.render('students', { students });
    })

    app.get("/add", async (req, resp) => {
        resp.render('add-students')
    })

    app.post("/add-student", async (req, resp) => {
        console.log(req.body);

        const collection = db.collection("students")
        const result = collection.insertOne(req.body)
        console.log(result);

        resp.send("data saved")
    })

})
app.listen(3200)
