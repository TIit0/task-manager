const express = require("express");
const app = express();
const taskRouter = require("./routes/tasksRouter")

// routes

app.use(express.static("./public"));

// parsers
app.use(express.json());

app.use("/api/v1/tasks", taskRouter);




app.listen(3000, () => {
    console.log("Listening on port 3000...")
});