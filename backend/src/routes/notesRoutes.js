import express from "express";
import { createNote, deleteNotes, getAllNotes, getNoteById, updateNote } from "../../src/controller/notesController.js";

const router = express.Router();

router.get('/',getAllNotes)
router.get('/:id',getNoteById)
router.post('/', createNote)
router.put('/:id', updateNote)
router.delete('/:id', deleteNotes)

export default router;

