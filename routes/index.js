import { Router } from "express";
import adminRoutes from "./admin.routes.js";
import catroutes from "./category.routes.js";
import proRoutes from "./product.routes.js";



const routes = Router();


routes.use("/", adminRoutes);
routes.use("/category", catroutes);
routes.use("/product" , proRoutes)


export default routes;