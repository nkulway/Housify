const express = require('express');
const es6Renderer = require('express-es6-template-engine');
const Sequelize = require('sequelize');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan')

const app = express();


app.engine('html', es6Renderer);
app.set('views', 'views');
app.set('view engine', 'html');

const indexRouter = require('./routes/index');
const usersRouter = require('./routes/users');
const choresRouter = require('./routes/chores');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/chores', choresRouter);







module.exports = app;
