const express = require("express");
const router = express.Router();
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const User = require("../models/User");
const mongoUrl = 'mongodb://localhost:27017/TWB';

router.get("/users", async (req, res) => {
    try {
        // checkar se request e un valido jwt token
        const authHeader = req.headers.authorization;
        if (!authHeader) {
            return res.status(401).json({ message: "Authorization header missing" });
        }
        const token = authHeader.split(" ")[1];
        if (!token) {
            return res.status(401).json({ message: "Token missing" });
        }
        const decodedToken = jwt.verify(token, process.env.JWT_SECRET);
        if (!decodedToken) {
            return res.status(401).json({ message: "Invalid token" });
        }

        //  ver se usuario que faz o request is um admin
        const user = await User.findById(decodedToken.userId);
        if (!user || user.role !== "admin") {
            return res.status(403).json({ message: "Forbidden" });
        }

        //retornar lista de usuarios se usuario e admin
        const users = await User.find();
        return res.json({ users });
    } catch (error) {
        console.error(error);
        return res.status(500).json({ message: "Server error" });
    }
});

module.exports = router;
