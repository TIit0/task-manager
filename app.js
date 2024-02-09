const express = require("express");
const app = express();
const taskRouter = require("./routes/tasksRouter");
const connectDB = require("./db/connect");
require("dotenv").config();
const notFound = require("./middleware/notFound404");
const errorHandlerMiddleware = require("./middleware/errorHandler")

// parsers
app.use(express.static("./public"));
app.use(express.json());

// routes
app.use("/api/v1/tasks", taskRouter); /* applies to everything after /api/v1/tasks  */

// 404 Not Found
app.use(notFound);


// Error handling
app.use(errorHandlerMiddleware);

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

