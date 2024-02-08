const Task = require("../models/task")


async function getTasks(req, res) {
    try {
        const allTasks = await Task.find({});
        return res.status(200).json(allTasks)
    } catch (e) {
        return res.status(200).json(e)
    }
}

async function getSingleTask(req, res) {
    const { id } = req.params;

    try {
        const task = await Task.findOne({ _id: id });
        if (!task) {
            return res.status(404).send(`no task found with id: ${id}`)
        }
        return res.status(200).json({ task });
    } catch (e) {
        return res.status(500).json(e)
    }
}

async function postTask(req, res) {

    try {
        const task = await Task.create(req.body);
        console.log(task)

        return res.status(201).json({ success: true, task: task })
    } catch (e) {
        return res.status(500).json({ success: false, msg: e.message })
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