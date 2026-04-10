import Category from "../models/category.js";
import fs from "fs";

export const addPage = (req, res) => {
    res.render("pages/category");
};

export const createCategory = async (req, res) => {
    try {
        const data = {
            name: req.body.name
        };

        if (req.file) {
            data.image = req.file.path;
        }

        await Category.create(data);

        res.redirect('/category/view');

    } catch (error) {
        console.log(error);
        res.send(error.message);
    }
};

export const viewCategory = async (req, res) => {
    try {
        const categories = await Category.find();

        res.render("pages/viewcategory", { categories });

    } catch (error) {
        console.log(error);
        res.send(error.message);
    }
};

export const deleteCategory = async (req, res) => {
    try {
        const data = await Category.findById(req.params.id);

        if (data.image) {
            fs.unlinkSync(data.image);
        }

        await Category.findByIdAndDelete(req.params.id);

        res.redirect('/category/view');

    } catch (error) {
        console.log(error);
        res.send(error.message);
    }
};

export const editPage = async (req, res) => {
    try {
        const category = await Category.findById(req.params.id);

        res.render("pages/editcategory", { category });

    } catch (error) {
        console.log(error);
        res.send(error.message);
    }
};

export const updateCategory = async (req, res) => {
    try {
        const oldData = await Category.findById(req.params.id);

        let updatedData = {
            name: req.body.name
        };

        if (req.file) {
            if (oldData.image) {
                fs.unlinkSync(oldData.image);
            }
            updatedData.image = req.file.path;
        }

        await Category.findByIdAndUpdate(req.params.id, updatedData);

        res.redirect('/category/view');

    } catch (error) {
        console.log(error);
        res.send(error.message);
    }
};