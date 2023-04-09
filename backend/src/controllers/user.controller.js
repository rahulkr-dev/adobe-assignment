const User = require('../models/user.model');

// Create a new user
const createUser = async (req, res) => {
    const { name, email, bio } = req.body;
    try {
        const newUser = new User({ name, email, bio });
        const savedUser = await newUser.save();
        res.status(201).json(savedUser);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

// passing id in params and get user
const getUserById = async (req, res) => {
    const { id } = req.params;
    try {
        const user = await User.findById(id);
        if (user) {
            res.json(user);
        } else {
            res.status(404).json({ message: 'User not found' });
        }
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};


// pass ID in paramsand name and bio from body
const updateUserById = async (req, res) => {
    const { id } = req.params;
    const { name, bio } = req.body;
    try {
        const user = await User.findById(id);
        if (user) {
            // if name and bio not found then we updated from previous by using || operator
            user.name = name || user.name;
            user.bio = bio || user.bio;
            const savedUser = await user.save();
            res.status(200).json(savedUser);
        } else {
            res.status(404).json({ message: 'User not found' });
        }
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

//  delete user by id
const deleteUserById = async (req, res) => {
    const { id } = req.params;
    try {
        const user = await User.findByIdAndDelete(id);
        if (user) {
            res.status(204).json({ message: 'User deleted' });
        } else {
            res.status(404).json({ message: 'User not found' });
        }
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};


module.exports = {
    deleteUserById,
    createUser,
    getUserById,
    updateUserById
}