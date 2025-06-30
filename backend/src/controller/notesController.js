import Note from "../models/Note.js"

export const getAllNotes = async (_,res)=>{                                            // Here we have put _ in place of req because req was not used in this function so by convention we use the "underscore"
    try {
        const notes = await Note.find().sort({createdAt: -1});                         // -1 sorts the latest note created at the top
        res.status(200).json(notes)
    } catch (error) {
        console.error("Error in getAllNotes controller")
        res.status(500).json({message: "Internal Server Error"})
    }
}

export const getNoteById = async (req,res) => {
    try {
        const idNote = await Note.findById(req.params.id)
        if(!idNote) return res.status(404).json({message: "Note not found"})
        res.json(idNote)
    } catch (error) {
        console.error("Error in getNoteById controller")
        res.status(500).json({message: "Internal Server Error"})
    }
}

export const createNote = async (req,res)=>{
    try {
        const {title, content} = req.body;
        const newNote = new Note({title, content})

        const savedNote = await newNote.save();
        res.status(201).json(savedNote)
    } catch (error) {
        console.error("Error in createNote controller", error);
        res.status(500).json({message: "Internal server error"})
    }
}

export const updateNote = async (req,res)=>{
    try {
        const {title, content} = req.body
        const updatedNote = await Note.findByIdAndUpdate(req.params.id,{title,content},{new: true})
        if(!updatedNote) return res.status(404).json({message: "Note not found"})
        res.status(200).json(updatedNote)
    } catch (error) {
        console.error("Error in updateNote controller", error);
        res.status(500).json({message: "Internal server error"})
    }
}

export const deleteNotes = async (req,res)=>{
    try {
        const {title, content} = req.body
        const deletedNote = await Note.findByIdAndDelete(req.params.id,{title,content})
        if(!deletedNote) return res.status(404).json({message: "Note not found"})
        res.status(200).json({message: "Note Deleted Successfully"})
    } catch (error) {
        console.error("Error in deleteNote controller", error);
        res.status(500).json({message: "Internal server error"})
    }
}

