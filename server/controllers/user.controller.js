import { User } from "../models/user.model.js";
import bcrypt from 'bcryptjs';
import { generateToken } from "../utils/generateToken.js";
import { deleteMediaFromCloudinary, uploadMedia } from "../utils/cloudinary.js";

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

export const logout = async (_, res) => {
    try {
        return res.status(200).cookie('token', '', { maxAge: 0 }).json({
            message: 'Logged out successfully',
            success: true
        })
    } catch (error) {
        console.log(error)
        return res.status(500).json({
            success: fail,
            message: 'Failed to Logout',
            error
        })
    }
}

export const getuserprofile = async (req, res) => {
    try {
        const userId = req.id;
        const user = await User.findById(userId).select('-password');
        if (!user) {
            return res.status(404).json({
                message: 'Profile not found',
                success: false
            })
        }
        return res.status(200).json({
            success: true,
            user
        })
    } catch (error) {
        console.log(error)
        return res.status(500).json({
            success: fail,
            message: 'Failed to load user',
            error
        })
    }
}

export const updateprofile = async (req, res) => {
    try {
        const userId = req.id;
        const { name } = req.body;
        const profilePhoto = req.file;

        const user = await User.findById(userId);
        if (!user) {
            return res.status(404).json({
                message: 'User not found',
                success: false
            })
        }
        // extract the publicId of old image from url if it exists
        if (user.photoUrl) {
            const publicId = user.photoUrl.split('/').pop().split('.')[0]; // extracting publicId
            deleteMediaFromCloudinary(publicId);
        }

        // Upload new photo
        const cloudResponse = await uploadMedia(profilePhoto.path);
        const photoUrl = cloudResponse.secure_url;
        const updatedData = { name, photoUrl };

        const updateduser = await User.findByIdAndUpdate(userId, updatedData, { new: true }).select('-password');
        return res.status(200).json({
            success: true,
            user: updateduser,
            message: 'Profile updated successfully'
        })
    } catch (error) {
        console.log(error)
        return res.status(500).json({
            success: fail,
            message: 'Failed to update profile',
            error
        })
    }
}