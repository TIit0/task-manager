const Task = require("../models/task")


async function getTasks(req, res) {
    try {
        const tasks = await Task.find({});
        return res.status(200).json({ tasks })
    } catch (e) {
        return res.status(200).json(e)
    }
}

async function getSingleTask(req, res) {
    const { id } = req.params;

    try {
        const task = await Task.findOne({ _id: id });
        if (!task) {
            return res.status(404).json({ msg: `No task with id: ${id}` })
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

async function patchTask(req, res) {
    const { id } = req.params;

    try {
        const task = await Task.findOneAndUpdate({ _id: id }, req.body, { new: true, runValidators: true });
        if (!task) {
            return next(createCustomError(`No task with id : ${taskID}`, 404))
        }
        return res.status(200).json({ task });

    } catch (e) {
        return res.status(500).json({ success: false, msg: e.message })
    }

}


async function deleteTask(req, res) {
    const { id } = req.params;

    try {
        const task = await Task.findOneAndDelete({ _id: id });
        if (!task) {
            return res.status(404).json({ msg: `No task with id: ${id}` })
        }
        return res.status(200).json({ success: true, data: task })
    } catch (e) {
        return res.status(500).json({ success: false, msg: e.message })
    }
}

module.exports = { getTasks, getSingleTask, postTask, patchTask, deleteTask }