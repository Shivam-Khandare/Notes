import express from "express";
import notesRoutes from "./routes/notesRoutes.js"
import { connectDB } from "./config/db.js";
import dotenv from "dotenv";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5001

connectDB();

app.use(express.json());                                           // This will allow to access the value of title and content to req.body

app.use("/api/notes",notesRoutes)                                  // This will prefix the routes of notesRoutes to /api/notes

app.listen(PORT,()=>{
    console.log("Server is running on port:", PORT)
})