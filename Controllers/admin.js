import adminModel from "../models/admin.js";
import jwt from 'jsonwebtoken';

const authAdmin = async (req, res) => {
    try {
        const { email, password } = req.body;
        const user = await adminModel.findOne({ email });
        if (user) {
            if (password === user.password) {
                const token = jwt.sign(
                    {status : 202},
                    '@jgadmin',
                    { expiresIn: '1h' }
                );
                res.json({ status: "ok", message: "Authentication successful", token });
            } else {
                const token = jwt.sign(
                    { status: 400 },
                    '@jgadmin',
                    { expiresIn: '1h' }
                );
                res.json({ status: "false", message: "Incorrect password", token });
            }
        } else {
            const token = jwt.sign(
                { status: 404 },
                '@jgadmin',
                { expiresIn: '1h' }
            );
            res.json({ status: 404, message: "Admin not found", token });
        }
    } catch (error) {
        console.error(error);
        res.status(500).json({ status: 500, message: "Internal Server Error" });
    }
};

export default authAdmin;
