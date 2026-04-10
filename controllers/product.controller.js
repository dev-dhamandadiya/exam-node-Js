import Product from "../models/product.js";
import Category from "../models/category.js";
import fs from "fs";

export const addPage = async (req, res) => {
    const categories = await Category.find();
    res.render("pages/product", { categories });
};

export const createProduct = async (req, res) => {
    try {
        let data = req.body;

        if (req.file) {
            data.image = req.file.path;
        }

        await Product.create(data);

        res.redirect('/product/view');

    } catch (error) {
        console.log(error);
        res.send(error.message);
    }
};

export const viewProduct = async (req, res) => {
    try {
        const products = await Product.find().populate("category");

        res.render("pages/allproduct", { products });

    } catch (error) {
        console.log(error);
        res.send(error.message);
    }
};

export const deleteProduct = async (req, res) => {
    try {
        const data = await Product.findById(req.params.id);

        if (data.image && fs.existsSync(data.image)) {
            fs.unlinkSync(data.image);
        }

        await Product.findByIdAndDelete(req.params.id);

        res.redirect('/product/view');

    } catch (error) {
        console.log(error);
        res.send(error.message);
    }
};

export const editPage = async (req, res) => {
    const product = await Product.findById(req.params.id);
    const categories = await Category.find();

    res.render("pages/editproduct", { product, categories });
};

export const updateProduct = async (req, res) => {
    try {
        const oldData = await Product.findById(req.params.id);

        let updatedData = req.body;

        if (req.file) {
            if (oldData.image && fs.existsSync(oldData.image)) {
                fs.unlinkSync(oldData.image);
            }
            updatedData.image = req.file.path;
        }

        await Product.findByIdAndUpdate(req.params.id, updatedData);

        res.redirect('/product/view');

    } catch (error) {
        console.log(error);
        res.send(error.message);
    }
};