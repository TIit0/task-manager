const Task = require("../models/task")


function getTasks(req, res) {
    return res.status(200).send("all Items")
}

function getSingleTask(req, res) {
    const { id } = req.params;
    /*
    const task = tasks.find(id => task.id == id);
    */

    return res.status(200).json({ id })
}

async function postTask(req, res) {

    try {
        const task = await Task.create(req.body);
        console.log(task)

        return res.status(201).json({ success: true, task: task })
    } catch (e) {
        return res.status(401).json({ success: false, msg: e.message })
    }
}

function patchTask(req, res) {
    const { id } = req.params;
    /*
    old tasks = {...oldTasks, task}
    */

    return res.status(201).json({ id })
}


function deleteTask(req, res) {
    const { id } = req.params;
    /*
    old tasks = {...oldTasks, task}
    */
    return res.status(201).json({ id: `deleted: id ${id}` })
}

module.exports = { getTasks, getSingleTask, postTask, patchTask, deleteTask }