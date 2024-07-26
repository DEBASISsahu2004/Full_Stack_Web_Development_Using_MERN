const {model, Schema} = require("mongoose");

const TaskSchema = new Schema({
    title: {
        type: String,
        required: true,
    },

    description:{
        type:String,
        required: true,
    },

    isComplete: {
        type: Boolean,
        description: false,
    }
},
{
    timestamps: true,
}
);

const TaskModel = model("Task", TaskSchema);

module.exports = TaskModel;