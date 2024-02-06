const express = require("express");
const app = express();
const taskRouter = require("./routes/tasksRouter")
const connectDB = require("./db/connect")
require("dotenv").config()

// routes

app.use(express.static("./public"));

// parsers
app.use(express.json());

app.use("/api/v1/tasks", taskRouter);


const port = 3000;

async function start() {

    try {
        await connectDB(process.env.CONNECT_USER); // if connectDB successfully run server app.listen

        app.listen(port, () => { console.log("Listening on port 3000...") });
    } catch (e) {
        console.log(`Error launching on port ${port}! Error: ${e}`)
    }
}


start();

