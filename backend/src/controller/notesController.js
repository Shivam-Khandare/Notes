export const getAllNotes = (req,res)=>{
    res.status(200).send("You fetched the notes")
}

export const createNote = (req,res)=>{
    res.status(201).json({message: "Post created Successfully"})
}

export const updateNote = (req,res)=>{
    res.status(200).json({message: "Post updated Successfully"})
}

export const deleteNotes = (req,res)=>{
    res.status(200).json({message: "Post deleted Successfully"})
}

