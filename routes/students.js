import express from "express";
const router = express.Router();

import { getStudents, getStudent, createStudent, updateStudent, deleteStudent} from "../controllers/students.js";

router.get('/', getStudents);

router.get('/:regno', getStudent);

router.post('/', createStudent);

router.patch("/:regno",updateStudent);

router.delete('/:regno', deleteStudent);

export default router;
