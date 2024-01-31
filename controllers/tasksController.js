

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

function postTask(req, res) {
    const { name } = req.body;
    /*
    old tasks = {...oldTasks, task}
    */

    return res.status(201).send(`hi ${name}`)
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
    return res.status(201).json({id: `deleted: id ${id}`})
}

module.exports = { getTasks, getSingleTask, postTask, patchTask, deleteTask }