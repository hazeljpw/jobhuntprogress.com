const express = require('express');
const statusRouter = express.Router();

statusRouter.route('/')
.all((req, res, next) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    next();
})
.get((req, res) => {
    res.end('Will send all the status to you');
})
.post((req, res) => {
    res.end(`Will add the status: ${req.body.name} with description: ${req.body.description}`);
})
.put((req, res) => {
    res.statusCode = 403;
    res.end('PUT operation not supported on /status');
})
.delete((req, res) => {
    res.end('Deleting all status');
});

statusRouter.route('/:statusId')
.all((req, res, next) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    next();
})
.get((req, res) => {
    res.end(`Will get status of id: ${req.params.statusId}`);
})

.post((req, res) => {
    res.statusCode = 403;
    res.end('POST operation not supported');
})

.put((req, res) => {
    res.end(`Will update the status with: ${req.params.statusId}`)
})

.delete((req, res) => {
    res.end(`Will delete the status with id: ${req.params.statusId}`);
});

module.exports = statusRouter;