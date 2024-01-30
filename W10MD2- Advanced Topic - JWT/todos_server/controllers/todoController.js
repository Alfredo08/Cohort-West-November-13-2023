const express = require('express');
const Todos = require('./../models/todoModel');
const validateToken = require('./../middlewares/validateToken');

const todoController = express.Router();

todoController.get('/todosByUser', validateToken, (req, res) => {
    console.log(req.userInfo);
    Todos.getTodosByUser([req.userInfo.id])
        .then((result) => {
            return res.json({todos: result.rows});
        })
        .catch((error) => {
            return res.status(400).json({message: "Something went wrong while executing the query"})
        });
});

module.exports = todoController;
