import express from "express";
import notesRoutes from "./routes/notesRoutes.js"
import { connectDB } from "./config/db.js";
import dotenv from "dotenv";
import rateLimiter from "./middleware/rateLimiter.js";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5001

app.use(express.json())                                            // This middleware will parse JSON bodies: req.body
app.use(rateLimiter)

app.use("/api/notes",notesRoutes)                                  // This will prefix the routes of notesRoutes to /api/notes

connectDB().then(()=>{
    app.listen(PORT,()=>{
        console.log("Server is running on port:", PORT)
    })
})