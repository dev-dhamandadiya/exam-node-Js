import { Router } from "express";
import {addPage,createCategory,viewCategory,deleteCategory,editPage,updateCategory} from "../controllers/category.controller.js";
import uploads from "../middlewares/imageUploads.js";

const router = Router();

router.get('/add', addPage);
router.post('/add', uploads, createCategory);
router.get('/view', viewCategory);
router.get('/delete/:id', deleteCategory);
router.get('/edit/:id', editPage);
router.post('/update/:id', uploads, updateCategory);

export default router;