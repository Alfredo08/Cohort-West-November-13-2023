const express = require('express');
const Users = require('./../models/userModel');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const SECRET = 'this_must_be_secret';
const validateToken = require('./../middlewares/validateToken');

const userController = express.Router();

userController.post('/login', (req, res) => {
    const {email, password} = req.body;
    Users.getOne([email])
        .then((result) => {
            if(result.rows.length === 0){
                return res.status(404).json({message: "This user email is not found in our DB"});
            }
            const user = result.rows[0];

            bcrypt.compare(password, user.password)
                .then((bcryptResult) => {
                    if(!bcryptResult){
                        return res.status(400).json({message: "Invalid credentials"});
                    }
                    const payload = {
                        firstName: user.first_name,
                        lastName: user.last_name,
                        id: user.id,
                        email: user.email
                    };
                    jwt.sign(payload, SECRET, {expiresIn: '1m'}, (error, token) => {
                        console.log("here", error, token);
                        if(error){
                            return res.json({message: "Something went wrong while generating the token"});
                        }
                        return res.json({token});
                    });
                });
        }) 
        .catch((error) => {
            return res.json({message: "Something went wrong while executing the query"});
        });
});

userController.get('/verify', validateToken, (req, res) => {
    return res.json({user: req.userInfo});
});


module.exports = userController;
