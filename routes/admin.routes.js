import { Router } from "express";
import adminController from "../controllers/admin.controller.js";

const adminRoutes = Router();

adminRoutes.get('/login', adminController.loginPage);
adminRoutes.post('/login' , adminController.login)

adminRoutes.get('/register', adminController.registerPages);
adminRoutes.post('/register' , adminController.register)  

adminRoutes.get('/' , adminController.homepages)


export default adminRoutes