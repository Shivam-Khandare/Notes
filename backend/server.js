import express from "express";

const app = express();

app.get('/api/notes',(req,res)=>{
    res.status(200).send("Hello World")
})

app.post('/api/notes', (req,res)=>{
    res.status(201).json({message: "Post created Successfully"})
})

app.put('/api/notes/:id', (req,res)=>{
    res.status(200).json({message: "Post updated Successfully"})
})

app.delete('/api/notes/:id', (req,res)=>{
    res.status(200).json({message: "Post deleted Successfully"})
})

app.listen(5001,()=>{
    console.log("Server is running on port 3000")
})