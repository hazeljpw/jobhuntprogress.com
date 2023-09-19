const express = require('express');
const authRouter = express.Router();

authRouter.route('/:authId')
.all((req, res, next) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    next();
})
.post((req, res) => {
    res.end(`Will log in auth with id: ${req.params.authId}`);
})

.delete((req, res) => {
    res.end(`Will log out auth with id: ${req.params.authId}`);
});


module.exports = authRouter;