const express = require('express');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const mongoose = require('mongoose');
const User = mongoose.model('User');
const authConfig = require('../config/auth.json');
const router = express.Router();
const mongoUrl = 'mongodb://localhost:27017/TWB';
// Helper function to generate JWT token
const generateToken = (user) => {
    return jwt.sign({ id: user.id, username: user.username }, authConfig.secret, {
        expiresIn: 86400 // Token expires in 24 hours (86400 seconds)
    });
};

// Route for user registration
router.post('/register', async (req, res) => {
    const { username, email, password } = req.body;

    try {
        const user = await User.create({ username, email, password });
        const token = generateToken(user); // Generate token for newly registered user
        return res.json({ user, token }); // Return user and token in JSON response
    } catch (error) {
        return res.status(400).json({ error: 'Registration failed' }); // Return error if registration fails
    }
});

// Route for user authentication (login)
router.post('/authenticate', async (req, res) => {
    const { email, username, password } = req.body;
    let user;

    // Find user by email or username
    if (email) {
        user = await User.findOne({ email }).select('+password'); // Select password field which is hidden by default in User model
    } else if (username) {
        user = await User.findOne({ username }).select('+password');
    } else {
        return res.status(400).json({ error: 'Invalid credentials' }); // Return error if no email or username is provided
    }

    // Return error if user is not found
    if (!user) {
        return res.status(400).json({ error: 'User not found' });
    }

    // Compare provided password with stored password
    if (!await bcrypt.compare(password, user.password)) {
        return res.status(400).json({ error: 'Invalid password' }); // Return error if passwords don't match
    }

    // Hide password field in user object before generating token
    user.password = undefined;
    const token = generateToken(user); // Generate token for authenticated user
    return res.json({ user, token }); // Return user and token in JSON response
});

module.exports = router;
