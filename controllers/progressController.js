// imports
const Progress = require('../models/progress');

const progress_index = (req, res) => {
  Progress.find().sort({ createdAt: -1 })
    .then(result => {
      res.render('progress/index', { progress: result, title: 'All progress' });
    })
    .catch(err => {
      console.log(err);
    });
}

const progress_details = (req, res) => {
  const id = req.params.id;
  Progress.findById(id)
    .then(result => {
      res.render('progress/details', { progress: result, title: 'progress Details' });
    })
    .catch(err => {
      console.log(err);
    });
}

const progress_create_get = (req, res) => {
  res.render('progress/create', { title: 'Create a new progress' });
}

const progress_create_post = (req, res) => {
  const progress = new Progress(req.body);
  progress.save()
    .then(result => {
      res.redirect('/progress');
    })
    .catch(err => {
      console.log(err);
    });
}

const progress_delete = (req, res) => {
  const id = req.params.id;
  Progress.findByIdAndDelete(id)
    .then(result => {
      res.json({ redirect: '/progress' });
    })
    .catch(err => {
      console.log(err);
    });
}

// exports
module.exports = {
  progress_index, 
  progress_details, 
  progress_create_get, 
  progress_create_post, 
  progress_delete
}