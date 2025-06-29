import mongoose from "mongoose";

const noteSchema = new mongoose.Schema({
    tile: {
        type: String,
        required: true
    },
    content: {
        type: String,
        required: true
    }
}, {timestamps: true})

export default Note = mongoose.model("Note",noteSchema);