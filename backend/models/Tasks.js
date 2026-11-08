
const mongoose = require("mongoose")
const taskSchema = new mongoose.Schema({
    title: {
        type: String,
        trim: true,
        required: true,
        maxlength: 100,
    },

    description:{
        type:String,
        required: true,
        trim: true,
        maxlength: 1000,
    },
    priority : {
        type: String,
        enum : ["low", "medium", "high"],
        required: true,
        trim: true,
    },
    completed: {
        type: Boolean,
        default: false,
    },

    dueDate: {
    type: String,
    required: true,
    trim: true,
    },
})


module.exports= mongoose.model("Task",taskSchema)