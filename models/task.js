
const mongoose = require("mongoose");
/* validators and schema example */
const TaskSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, "must provide name"],
        trim: true,
        maxlength:[20, "name can't be longer then 20 characters"]
    },

    completed: {
        type: Boolean,
        default: false
    }
});


module.exports = mongoose.model("Task", TaskSchema)