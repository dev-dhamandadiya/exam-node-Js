import { Router } from "express";
import {addPage,createProduct,viewProduct,deleteProduct,editPage,updateProduct} from "../controllers/product.controller.js";
import uploads from "../middlewares/imageUploads.js";

const proRoutes = Router();

// add page
proRoutes.get('/add', addPage);

// create
proRoutes.post('/add', uploads, createProduct);

// view
proRoutes.get('/view', viewProduct);

// delete
proRoutes.get('/delete/:id', deleteProduct);

// edit page
proRoutes.get('/edit/:id', editPage);

// update
proRoutes.post('/update/:id', uploads, updateProduct);

export default proRoutes;