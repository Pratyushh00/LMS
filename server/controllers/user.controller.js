import { User } from "../models/user.model.js";
import bcrypt from 'bcryptjs';
import { generateToken } from "../utils/generateToken.js";

export const register = async (req, res) => {
    try {
        const { name, email, password } = req.body;
        if (!name || !email || !password) {
            return res.status(400).json({
                success: false,
                message: 'All fields are required'
            })
        }
        const user = await User.findOne({ email });
        if (user) {
            return res.status(400).json({
                success: false,
                message: 'User already exists with this Email Id'
            })
        }
        const hashedpassword = await bcrypt.hash(password, 10);
        await User.create({
            name,
            email,
            password: hashedpassword
        });
        return res.status(201).json({
            success: true,
            message: 'User registered successfully !'
        })
    } catch (error) {
        console.log(error)
        return res.status(500).json({
            success: fail,
            message: 'Failed to register User',
            error
        })
    }
}

export const login = async (req, res) => {
    try {
        const { email, password } = req.body;
        if (!email || !password) {
            return res.status(400).json({
                success: false,
                message: 'All fields are required'
            })
        }
        const user = await User.findOne({ email });
        if (!user) {
            return res.status(400).json({
                success: false,
                message: 'User does not exists with this Email Id'
            })
        }
        const isCurrectPassword = await bcrypt.compare(password, user.password);
        if (!isCurrectPassword) {
            return res.status(400).json({
                success: false,
                message: 'Incorrect password'
            })
        }

        generateToken(res, user, `Welcome back ${user.name}`);
    } catch (error) {
        console.log(error)
        return res.status(500).json({
            success: fail,
            message: 'Failed to register User',
            error
        })
    }
}