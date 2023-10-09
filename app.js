const express = require('express');
const morgan = require('morgan');
const mongoose = require('mongoose');
const progressRoutes = require('./routes/progressRoutes');

// express app
const app = express();

// connection to mongodb
const dbURI = 'mongodb+srv://dbh_tester_jane:BIqOj65OuqQUyWlF@jhp.kt89c3h.mongodb.net/?retryWrites=true&w=majority';
mongoose.connect(dbURI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => app.listen(3000))
  .catch((err) => console.log(err));

// register view engine
app.set('view engine', 'ejs');

// middleware & static files
app.use(express.static('public'));
app.use(express.urlencoded({ extended: true }));
app.use(morgan('dev'));
app.use((req, res, next) => {
  res.locals.path = req.path;
  next();
});

// routes
app.get('/', (req, res) => {
  res.redirect('/progress');
});

app.get('/about', (req, res) => {
  res.render('about', { title: 'About' });
});

// progress routes
app.use('/progress', progressRoutes);

// 404 page
app.use((req, res) => {
  res.status(404).render('404', { title: '404' });
});