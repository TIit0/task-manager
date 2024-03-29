const Task = require("../models/task")
const asyncWrapper = require("../middleware/asyncWrapper");

/* refactor with middle-ware example, utilizes navite next.JS error handler middleware */


const getTasks = asyncWrapper(async (req, res) => {

    const tasks = await Task.find({});
    return res.status(200).json({ tasks, amount: tasks.length })

});


const getSingleTask = asyncWrapper(async (req, res) => {

    const { id } = req.params;

    const task = await Task.findOne({ _id: id });
    if (!task) {
        return res.status(404).json({ msg: `No task with id: ${id}` })
    }
    return res.status(200).json({ task });

})

const postTask = asyncWrapper(async (req, res) => {
    const task = await Task.create(req.body);
    return res.status(201).json({ success: true, task: task })
});


const patchTask = asyncWrapper(async (req, res) => {
    const { id } = req.params;

    const task = await Task.findOneAndUpdate({ _id: id }, req.body, { new: true, runValidators: true });
    if (!task) {
        return next(createCustomError(`No task with id : ${taskID}`, 404))
    }
    return res.status(200).json({ task });

});


const deleteTask = asyncWrapper(async (req, res) => {
    const { id } = req.params;


    const task = await Task.findOneAndDelete({ _id: id });
    if (!task) {
        return res.status(404).json({ msg: `No task with id: ${id}` })
    }
    return res.status(200).json({ success: true, data: task })
});

/* ---------------------- normal functions with no refactor under here ---------------------- */


async function postTaskVanillaError(req, res) {

    try {
        const task = await Task.create(req.body);

        return res.status(201).json({ success: true, task: task })
    } catch (e) {
        return res.status(500).json({ success: false, msg: e.message })
    }
}

async function patchTaskVanillaError(req, res) {
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


async function deleteTaskVanillaError(req, res) {
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