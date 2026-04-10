import User from "../models/user.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
const adminController = {

    homepages(req, res) {
        return res.render("index")
    },

    loginPage(req, res) {
        res.render('./pages/login.ejs');
    },

    async login(req, res) {
        try {
            const { email, password } = req.body;
            console.log(req.body);
            const user = await User.findOne({ email });
            if (!user) {
                return res.send("User not found");
            }
            const isValid = await bcrypt.compare(password, user.password);
            if (!isValid) {
                return res.send("Invalid Password");
            }
            const payload = {
                id: user._id,
                name: user.name
            };
            const token = jwt.sign(payload, "secret", {
                expiresIn: '1d'
            });
            res.cookie('token', token,
                { httpOnly: true });
            return res.redirect('/');

        } catch (error) {
            console.error(error);
            return res.redirect('/login');
        }
    },

    registerPages(req, res) {
        return res.render('pages/register');
    },

    async register(req, res) {
        try {
            const { username, email, password } = req.body || {};
            const user = await User.findOne({ email });
            if (user) {
                return res.send("User already exists");
            }
            const hashedPassword = await bcrypt.hash(password, 10);

            await User.create({
                username,
                email,
                password: hashedPassword
            });

            return res.redirect('/login');

        } catch (error) {
            console.log("REGISTER ERROR:", error.message);
            return res.send(error.message);
        }
    },

}

export default adminController;