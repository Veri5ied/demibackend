import mongoose from "mongoose"

const listSchema = mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    createdBy: {
        type: mongoose.SchemaTypes.ObjectId,
    },
    enums: ["chores", "travels", "holidays", "activity"]

}, { timestamps: true})

export const List = mongoose.model('list', listSchema)