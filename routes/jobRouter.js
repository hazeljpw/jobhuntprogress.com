const express = require('express');
const jobRouter = express.Router();

jobRouter.route('/')
.all((req, res, next) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    next();
})
.get((req, res) => {
    res.end('Will send all the jobs created to you');
})
.post((req, res) => {
    res.end(`Will add the job: ${req.body.name} with description: ${req.body.description}`);
})
.put((req, res) => {
    res.statusCode = 403;
    res.end('PUT operation not supported on /jobs');
})
.delete((req, res) => {
    res.end('Deleting all jobs');
});

jobRouter.route('/:jobId')
.all((req, res, next) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    next();
})
.get((req, res) => {
    res.end(`Will get job of id: ${req.params.jobId}`);
})

.post((req, res) => {
    res.statusCode = 403;
    res.end('POST operation not supported');
})

.put((req, res) => {
    res.end(`Will update the job with: ${req.params.jobId}`)
})

.delete((req, res) => {
    res.end(`Will delete the job with id: ${req.params.jobId}`);
});

module.exports = jobRouter;