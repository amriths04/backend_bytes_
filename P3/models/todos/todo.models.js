import mongoose from 'mongoose'
const todoSchema = new mongoose.Schema({
    content: {
        type: String,
        required: true,
    },
    complete: {
        type: Boolean,
        default: false,
    },
    createdBy: {
        //link with other schema that is user (referrenceing)
        type: mongooose.Schema.Types.ObjectId,
        ref: "User"
    },
    subTodos: [
        {
            type: mongoose.Scheme.Types.ObjectId,
            ref: "SubTodo"
        }
    ]


}, { timestamps: true })



export const Todo = mongoose.model("Todo", todoSchema)

